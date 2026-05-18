import Link from "next/link";

type HeroSectionProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function HeroSection({ search, setSearch }: HeroSectionProps) {
  return (
    <section className="px-4 md:px-10 py-10 md:py-16 text-center">
      {/* Text Header */}
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
        Cook Better Meals with{" "}
        <span className="text-orange-500">ChopBetter</span>
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
        Discover delicious recipes, learn new cooking styles and make every meal
        special.
      </p>

      {/* Search Bar */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
        <input
          type="text"
          placeholder="Search recipes (e.g Sushi)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-[500px] px-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-orange-500"
        />

        <button
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition cursor-pointer"
          onClick={() => {
            const section = document.getElementById("popular-recipes");

            section?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Search
        </button>
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <Link
          href="/recipes"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition cursor-pointer"
        >
          Explore Recipes
        </Link>
      </div>
    </section>
  );
}
