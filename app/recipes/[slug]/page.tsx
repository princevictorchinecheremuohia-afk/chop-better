type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function RecipePage({ params }: Props) {
  const { slug } = await params;

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${slug}`,
  );

  const data = await response.json();

  const recipe = data.meals?.[0];

  if (!recipe) {
    return <h1 className="p-10 text-3xl font-bold">Recipe not found</h1>;
  }

  // INGREDIENTS ARRAY
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <main className="pb-20">
      {/* HERO */}
      <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute bottom-10 left-6 md:left-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">{recipe.strMeal}</h1>

          <p className="mt-4 text-lg">
            {recipe.strCategory} • {recipe.strArea}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-4 md:px-10 mt-10 grid md:grid-cols-3 gap-10">
        {/* INGREDIENTS */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Ingredients</h2>

          <ul className="space-y-3">
            {ingredients.map((item, index) => (
              <li key={index} className="bg-orange-50 p-4 rounded-xl">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* INSTRUCTIONS */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Instructions</h2>

          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {recipe.strInstructions}
          </p>
        </div>
      </div>
    </main>
  );
}
