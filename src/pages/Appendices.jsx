import bg from "../assets/images/bg.jpg";
import { appendixItems } from "../data/appendixItems";
import { AppendixCard } from "../components/AppendixCard";

/* =========================
   MAIN COMPONENT
========================= */
const Appendices = () => {
  return (
    <div className="min-h-full flex flex-col items-center justify-between text-gray-800 gap-10">
      {/* HEADER */}
      <div
        id="appendices"
        style={{ backgroundImage: `url(${bg})` }}
        className="relative flex flex-col items-center w-full text-center p-12 rounded-b-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100 bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-white/80 rounded-lg pointer-events-none" />

        <div className="relative z-10">
          <p className="text-blue-900 font-bold text-base">APPENDICES</p>

          <h1 className="text-4xl sm:text-4xl md:text-3xl lg:text-6xl text-blue-900 font-bold mb-4 border-b-4 border-blue-900 w-max mx-auto">
            Appendices
          </h1>

          <p className="text-2xl text-gray-600 mb-14">
            Supporting Documents and References
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div
        id="internship-analysis-report"
        className="bg-white flex flex-col w-full flex-1 text-left p-12 rounded-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          {appendixItems.map((item) => (
            <AppendixCard
              key={item.label}
              label={item.label}
              title={item.title}
              images={item.images}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appendices;
