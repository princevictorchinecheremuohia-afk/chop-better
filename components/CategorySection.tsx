"use client";

import { useEffect, useState } from "react";

type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export default function CategoriesPageMainSection() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php",
      );

      const data = await response.json();

      const shuffled = [...data.categories].sort(() => 0.5 - Math.random());

      setCategories(shuffled);

      // setCategories(data.categories);

      setLoading(false);
    }

    fetchCategories();
  }, []);

  return (
    <section className="px-4 md:px-10 py-10 md:py-20 pb-20 bg-orange-50">
      {/* CATEGORY HEADER */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Browse Categories
      </h2>

      {loading ? (
        <div className="flex justify-center py-20">
          <h2 className="text-orange-500 text-lg animate-pulse">
            Loading categories...
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.slice(0, 3).map((category) => (
            <div
              key={category.idCategory}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer"
            >
              {/* IMAGE */}
              <div className=" overflow-hidden">
                <img
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                  className="w-full h-70 object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {category.strCategory}
                </h2>

                <p
                  className={`text-gray-600 mt-3 ${activeCategory === category.idCategory ? "" : "line-clamp-3"}`}
                >
                  {category.strCategoryDescription}
                </p>

                <button
                  onClick={() =>
                    setActiveCategory(
                      activeCategory === category.idCategory
                        ? null
                        : category.idCategory,
                    )
                  }
                  className="mt-4 text-orange-500 font-medium hover:underline"
                >
                  {activeCategory === category.idCategory
                    ? "Show less"
                    : "Read more"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
