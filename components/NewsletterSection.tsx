export default function NewsletterSection() {
  return (
    <section className="px-4 md:px-10 py-10 md:py-20">
      <div className="bg-orange-50 rounded-3xl px-6 md:px-12 py-14 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Get Weekly Recipe
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Subscribe to receive delicious recipes, cooking inspirations and food
          tips every week.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-[400px] px-5 py-4 rounded-xl outline-none bg-white text-gray-800"
          />

          <button className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-xl transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
