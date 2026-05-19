"use client";

import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { Recipe } from "@/types/recipe";

type RecipesPageMainSectionProps = {
  search: string;
};

export default function RecipesPage({ search }: RecipesPageMainSectionProps) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch("/api/recipes");

      const data = await response.json();

      setRecipes(data);

      setLoading(false);
    }

    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.strMeal.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      {/* RECIPES */}
      <section className="px-4 md:px-10 py-10 md:py-20 pb-20 bg-orange-50">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <h2 className="text-2xl font-semibold text-orange-500 animate-pulse">
              Loading recipes...
            </h2>
          </div>
        ) : filteredRecipes.length === 0 ? (
          <div className="text-center col-span-full py-10">
            <h2 className="text-2xl font-bold text-gray-700">
              "{search}" recipe not found
            </h2>

            <p className="text-gray-500 mt-2">
              Try searching another delicious meal.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                id={recipe.idMeal}
                title={recipe.strMeal}
                image={recipe.strMealThumb}
                description={recipe.strCategory}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
