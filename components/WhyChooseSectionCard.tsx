type WhyChooseSectionCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function WhyChooseSectionCard({
  icon,
  title,
  description,
}: WhyChooseSectionCardProps) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300">
      <div className="text-5xl mb-6">{icon}</div>

      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>

      <p className="text-gray-600 mt-4">{description}</p>
    </div>
  );
}
