"use client";

type RecipesHeroSectionProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function RecipesHeroSection({
  search,
  setSearch,
}: RecipesHeroSectionProps) {
  return (
    <section className="px-4 md:px-10 py-10 md:py-16 pt-32 pb-10 flex flex-col items-center text-center bg-orange-50">
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
  );
}
