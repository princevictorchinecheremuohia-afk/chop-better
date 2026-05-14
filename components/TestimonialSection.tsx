import TestimonialSectionCard from "./TestimonialSectionCard";

export default function TestimonialSection() {
  return (
    <section className="px-4 md:px-10 py-10 md:py-20 bg-white cursor-pointer">
      {/* TESTIMONIAL HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          What Food Lovers Are Saying?
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Millions of people are discovering delicious recipes and improving
          their cooking experience with ChopBetter
        </p>
      </div>

      {/* TESTIMONIAL GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TestimonialSectionCard
          rating="⭐⭐⭐⭐⭐"
          reveiw="ChopBetter helped me learn how to cook authentic Nigerian dishes easily. The recipes are simple and delicious. "
          userImage="https://i.pravatar.cc/100?img=1"
          userName="Mathew Lee"
          userDescription="Home Cook"
        />

        <TestimonialSectionCard
          rating="⭐⭐⭐⭐⭐"
          reveiw="The platform is beautiful and very easy to use on my phone. "
          userImage="https://i.pravatar.cc/100?img=3"
          userName="David James"
          userDescription="Food Blogger"
        />

        <TestimonialSectionCard
          rating="⭐⭐⭐⭐⭐"
          reveiw="I love the Nigerian recipe collection. Everything feels modern and organized. "
          userImage="https://i.pravatar.cc/100?img=5"
          userName="Ha Mone"
          userDescription="Recipe Ethusiast"
        />
      </div>
    </section>
  );
}
