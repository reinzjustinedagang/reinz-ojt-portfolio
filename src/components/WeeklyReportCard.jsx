import { useState } from "react";
import { PiMagnifyingGlassPlusBold } from "react-icons/pi";

const WeeklyReportCard = ({
  title,
  image,
  period,
  problems,
  remarks,
  accomplishments,
  skills = [],
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6 space-y-4">
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold text-blue-900 border-b-2 border-blue-900 w-fit">
        {title}
      </h2>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Image */}
        <div
          onClick={() => setOpen(true)}
          className="relative group w-full aspect-square md:aspect-auto md:h-72
  shadow-md rounded-xl flex items-center justify-center bg-white
  transition-all duration-300 ease-out
  hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer overflow-hidden"
        >
          <img
            src={image}
            alt="Weekly Report"
            className="w-full h-full object-contain p-4
            transition-all duration-300 ease-out
            group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center pointer-events-none">
            <div className="text-center text-white">
              <PiMagnifyingGlassPlusBold className="w-8 h-8 mx-auto mb-2" />
              <span className="text-sm">Click to enlarge</span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-4 w-full text-left">
          {/* Details */}
          <div className="space-y-1">
            <p className="text-blue-900">
              <span className="font-semibold">Period:</span> {period}
            </p>
            <p className="text-blue-900">
              <span className="font-semibold">Problems Met:</span> {problems}
            </p>
            <p className="text-blue-900">
              <span className="font-semibold">Remarks:</span> {remarks}
            </p>
          </div>

          {/* Accomplishments */}
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-1">
              Key Accomplishments
            </h3>
            <p className="text-gray-700">{accomplishments}</p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Skills Learned
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-sm font-medium text-blue-900 px-3 py-1 bg-blue-100 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal (Image Preview) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <img
            src={image}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default WeeklyReportCard;
