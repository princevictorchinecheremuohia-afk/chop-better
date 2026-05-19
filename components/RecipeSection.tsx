"use client";

import { useEffect, useState } from "react";

import { Recipe } from "@/types/recipe";
import RecipeCard from "./RecipeCard";

type Props = {
  search: string;
};

export default function RecipeSection({ search }: Props) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch("/api/recipes");

      const data = await response.json();

      const shuffled = [...data].sort(() => 0.5 - Math.random());

      setRecipes(shuffled);

      setLoading(false);
    }

    fetchRecipes();
  }, []);

  const filteredRecipes = recipes
    .filter((recipe) =>
      recipe.strMeal.toLowerCase().includes(search.toLowerCase()),
    )
    .slice(0, 3);

  return (
    <section id="popular-recipes" className="px-4 md:px-10 py-10 md:py-20">
      {/* RECIPESECTION HEADER */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Popular Recipes
      </h2>

      {/* RECIPESECTION GRID */}

      {loading ? (
        <div className="flex justify-center py-10">
          <p className="text-orange-500 text-lg animate-pulse">
            Loading recipes...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                id={recipe.idMeal}
                title={recipe.strMeal}
                image={recipe.strMealThumb}
                description={recipe.strCategory}
              />
            ))
          ) : (
            <div className="text-center col-span-full py-10">
              <h2 className="text-2xl font-bold text-gray-700">
                "{search}" recipe not found
              </h2>

              <p className="text-gray-500 mt-2">
                Try searching another delicious meal.
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
