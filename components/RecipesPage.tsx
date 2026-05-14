"use client";

import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import RecipeCard from "./RecipeCard";

import { Recipe } from "@/types/recipe";

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [search, setSearch] = useState("");
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
      <Navbar />

      {/* HERO */}
      <section className="px-4 md:px-10 py-10 md:py-16 pt-32 pb-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Explore Recipes
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl">
          Discover delicious meals from around the world.
        </p>

        {/* SEARCH */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-[500px] px-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-orange-500"
          />
        </div>
      </section>

      {/* RECIPES */}
      <section className="px-4 md:px-10 pb-20">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <h2 className="text-2xl font-semibold text-orange-500 animate-pulse">
              Loading recipes...
            </h2>
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
