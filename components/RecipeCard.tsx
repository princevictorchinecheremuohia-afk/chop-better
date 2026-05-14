import Link from "next/link";

type RecipeCardProps = {
  id: string;
  title: String;
  image: string;
  description: string;
};

export default function RecipeCard({
  id,
  title,
  image,
  description,
}: RecipeCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
      {/* RECIPECARD IMAGE */}
      <img src={image} className="w-full h-60 object-cover" />

      {/* RECIPECARD CONTENT */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <Link href={`/recipes/${id}`}>
          <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition cursor-pointer">
            View Recipe
          </button>
        </Link>
      </div>
    </div>
  );
}
