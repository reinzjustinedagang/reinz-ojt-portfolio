import { useState } from "react";
import { PiMagnifyingGlassPlusBold } from "react-icons/pi";

const ImageCard = ({ content, image, className = "" }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setOpen(true)}
        className={`flex flex-col text-gray-800 font-sans cursor-pointer group ${className}`}
      >
        <div
          className="
            relative w-full h-full
            mb-3 rounded-xl overflow-hidden shadow-md
          "
        >
          <img
            src={image}
            alt="Image"
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
          />

          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            <div className="text-center text-white">
              <PiMagnifyingGlassPlusBold className="w-8 h-8 mx-auto mb-2" />
              <span className="text-sm">Click to enlarge</span>
            </div>
          </div>
        </div>

        {content && (
          <p className="text-center text-sm italic text-gray-600 px-2">
            {content}
          </p>
        )}
      </div>

      {/* Modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <img
            src={image}
            alt="Enlarged"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </>
  );
};

export default ImageCard;
