"use client";

import { useEffect, useState } from "react";
import { Recipe } from "@/types/recipe";
import RecipeCard from "./RecipeCard";

export default function TrendingSection() {
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

  return (
    <section className="px-4 md:px-10 py-10 md:Py-20">
      {/* SECTION HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 ">
            Trending Recipes
          </h2>

          <p className="text-gray-600 mt-2">
            Most loved dishes people are cooking right now
          </p>
        </div>
      </div>

      {/* TRENDING GRID */}

      {loading ? (
        <div className="flex justify-center py-10">
          <p className="text-orange-500 text-lg animate-pulse">
            Loading recipes...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-3 cursor-pointer">
          {recipes.slice(0, 3).map((recipe) => (
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
  );
}
