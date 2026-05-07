import { VscGraph } from "react-icons/vsc";

const ratings = [
  { label: "SR — Student Self-Rating", value: 285, weight: 0.1 },
  { label: "PR — Peer Rating", value: 285, weight: 0.1 },
  {
    label: "SICR — Student Internship Coordinator Rating",
    value: 0,
    weight: 0.3,
  },
  { label: "ASR — Agency Supervisor Rating", value: 281, weight: 0.5 },
];

const maxValue = 285;

const RatingsOverview = () => {
  // Compute weighted score
  const totalScore = ratings.reduce((sum, item) => {
    return sum + item.value * item.weight;
  }, 0);

  // Convert to percentage
  const overallPercentage = (totalScore / maxValue) * 100;

  // Convert percentage into 1.0 - 5.0 scale
  const equivalent = Math.min(
    5,
    Math.max(1, ((overallPercentage - 75) / 25) * 4 + 1),
  ).toFixed(1);

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full">
      <h5 className="flex items-center gap-2 text-lg font-semibold text-blue-900 border-b pb-2 mb-4">
        <VscGraph className="w-5 h-5" />
        Ratings Overview
      </h5>

      <div className="space-y-4">
        {ratings.map((item, index) => {
          const percent = (item.value / maxValue) * 100;

          return (
            <div key={index}>
              <div className="flex justify-between items-center text-sm text-gray-700 mb-1">
                <span className="font-medium">{item.label}</span>

                <div className="flex gap-2 items-center">
                  <span className="text-xs text-gray-500">
                    {(item.weight * 100).toFixed(0)}%
                  </span>

                  <span className="font-bold text-blue-900 bg-blue-200 px-3 py-1 rounded-full text-xs">
                    {item.value}
                  </span>
                </div>
              </div>

              <div className="w-full h-2 bg-gray-100 rounded">
                <div
                  className="h-2 rounded bg-linear-to-r from-[#f0f8ff] to-blue-900 transition-all duration-700"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* TOTAL OVERALL */}
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-md font-semibold text-gray-800">
            Overall Rating
          </span>

          <div className="flex gap-2 items-center">
            <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-bold">
              {overallPercentage.toFixed(2)}%
            </span>

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
              Equivalent: {equivalent}
            </span>
          </div>
        </div>

        <div className="w-full h-3 bg-gray-100 rounded">
          <div
            className="h-3 rounded bg-linear-to-r from-blue-300 to-blue-900 transition-all duration-700"
            style={{ width: `${overallPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default RatingsOverview;
