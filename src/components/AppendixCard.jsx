import { FaFileAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PiMagnifyingGlassPlusBold } from "react-icons/pi";
import { XIcon } from "lucide-react";
import { useState } from "react";

export const AppendixCard = ({ label, title, images }) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setOpen(true)}
        className="flex flex-col text-gray-800 font-sans cursor-pointer group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
      >
        {/* IMAGE PREVIEW */}
        <div className="relative w-full h-56 overflow-hidden">
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            <div className="text-center text-white">
              <PiMagnifyingGlassPlusBold className="w-8 h-8 mx-auto mb-2" />
              <span className="text-sm">Click to view</span>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-4">
          <div className="flex items-center gap-2 border-b border-blue-900 pb-2">
            <FaFileAlt className="text-blue-900" />

            <h2 className="font-bold text-blue-900 truncate">
              {label}. {title}
            </h2>
          </div>

          <p className="text-sm text-gray-500 mt-3">{images.length} page(s)</p>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-5">
          {/* CLICK OUTSIDE TO CLOSE */}
          <div className="absolute inset-0" onClick={() => setOpen(false)} />

          {/* MODAL CONTENT */}
          <div className="relative z-10 flex items-center justify-center w-full max-w-6xl">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full shadow-md transition z-20"
            >
              <XIcon className="h-5 w-5" />
            </button>

            {/* PREV BUTTON */}
            {images.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-2 md:left-5 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition"
              >
                <FaChevronLeft />
              </button>
            )}

            {/* IMAGE */}
            <img
              src={images[current]}
              alt={`${title}-${current}`}
              className="max-w-[95%] max-h-[90vh] rounded-xl shadow-2xl object-contain"
            />

            {/* NEXT BUTTON */}
            {images.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-2 md:right-5 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition"
              >
                <FaChevronRight />
              </button>
            )}

            {/* PAGE INDICATOR */}
            <div className="absolute bottom-10 text-white text-sm">
              Page {current + 1} of {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
