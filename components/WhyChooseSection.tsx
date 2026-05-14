import WhyChooseSectionCard from "./WhyChooseSectionCard";

export default function WhyChooseSection() {
  return (
    <section className="px-4 md:px-10 py-10 md:py-20 bg-orange-50">
      {/* WHY CHOOSE SECTION HEADER */}
      <div className="text-center mb-14 bg-orange-50">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 ">
          Why Choose ChopBetter
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Discover aunthentic recipe with easy cooking steps, delicious
          inspiration and a modern cooking experience.
        </p>
      </div>

      {/* WHY CHOOSE SECTION CARD */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer">
        <WhyChooseSectionCard
          icon="🍲"
          title="Aunthetic Recipes"
          description="Explore rich dishes made with local ingredients and
            traditional cooking methods."
        />

        <WhyChooseSectionCard
          icon="⚡"
          title="Fast & Easy Cooking"
          description="Simple cooking steps anyone can follow without stress."
        />

        <WhyChooseSectionCard
          icon="📱"
          title="Mobile Friendly Experience"
          description="Enjoy seamless recipe browsing on desktop, tablet, and mobile devices."
        />
      </div>
    </section>
  );
}
