const InfoCard = ({ title, description }) => {
  return (
    <div className="bg-transparent rounded-xl shadow-sm p-5 border border-gray-100 border-l-4 border-l-blue-900 hover:shadow-lg transition">
      <p className="text-sm text-blue-900 font-semibold tracking-wide">
        {title}:
      </p>
      <p className="text-lg text-gray-800 font-regular">{description}</p>
    </div>
  );
};

export default InfoCard;
