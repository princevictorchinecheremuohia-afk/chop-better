type TestimonialSectionCardProps = {
  rating: string;
  reveiw: string;
  userImage: string;
  userName: string;
  userDescription: string;
};

export default function TestimonialSectionCard({
  rating,
  reveiw,
  userImage,
  userName,
  userDescription,
}: TestimonialSectionCardProps) {
  return (
    <div className="bg-orange-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition duration-300">
      {/* RATING */}
      <div className="text-yellow-500 text-2xl mb-4">{rating}</div>

      {/* REVEIW */}
      <p className="text-gray-600 leading-relaxed">{reveiw}</p>

      {/* USER DETAILS */}
      <div className="flex items-center gap-6 mt-6">
        <img
          src={userImage}
          alt="user"
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <h4 className="font-bold text-gray-800">{userName}</h4>

          <p className="text-gray-600 text-sm">{userDescription}</p>
        </div>
      </div>
    </div>
  );
}
