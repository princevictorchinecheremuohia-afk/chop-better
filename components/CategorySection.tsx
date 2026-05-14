export default function CategorySection() {
  return (
    <section className="px-4 md:px-10 py-10 md:py-20">
      {/* CATEGORY HEADER */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Browse Categories
      </h2>

      {/* CATEGORY CARD */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <div className="bg-white shadow-sm rounded-xl p-4 text-center hover:shadow-md transition cursor-pointer">
          <div className="text-3xl">🍚</div>
          <p className="mt-2 font-medium">Rice Dishes</p>
        </div>

        <div className="bg-white shadow-sm rounded-xl p-4 text-center hover:shadow-md transition cursor-pointer">
          <div className="text-3xl">🍲</div>
          <p className="mt-2 font-medium">Soups</p>
        </div>

        <div className="bg-white shadow-sm rounded-xl p-4 text-center hover:shadow-md transition cursor-pointer">
          <div className="text-3xl">🍖</div>
          <p className="mt-2 font-medium">Street Foods</p>
        </div>

        <div className="bg-white shadow-sm rounded-xl p-4 text-center hover:shadow-md transition cursor-pointer">
          <div className="text-3xl">🍞</div>
          <p className="mt-2 font-medium">Breakfast</p>
        </div>

        <div className="bg-white shadow-sm rounded-xl p-4 text-center hover:shadow-md transition cursor-pointer">
          <div className="text-3xl">🍗</div>
          <p className="mt-2 font-medium">Swallow and Soup</p>
        </div>
      </div>
    </section>
  );
}
