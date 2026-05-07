import bg from "../assets/images/bg.jpg";
import { FaFileAlt } from "react-icons/fa";

const appendixItems = [
  { label: "A", title: "Evaluation Form" },
  { label: "B", title: "Photocopy of Registration Form" },
  { label: "C", title: "Photocopy of Validated ID" },
  { label: "D", title: "Parent's Consent" },
  { label: "E", title: "Medical Certificate" },
  {
    label: "F",
    title: "Certificate of Good Moral Character & Application Letter",
  },
  { label: "G", title: "Application Letter" },
  { label: "H", title: "Endorsement Letter" },
  { label: "I", title: "Memorandum of Agreement" },
  { label: "J", title: "Daily Time Record (Time Card)" },
  { label: "K", title: "Certificate of Completion" },
  { label: "L", title: "Certificate of Clearance" },
  { label: "M", title: "Pictures during Pre-Service Seminar" },
  { label: "N", title: "Pictures during Office Works" },
  { label: "O", title: "Code of Ethics for CAST Student Internship" },
  { label: "P", title: "Curriculum Vitae" },
  { label: "Q", title: "On-the-Job Training Portfolio Evaluation Form" },
];

/**
 * AppendixSection is a placeholder card for each appendix item.
 * Replace the <div className="placeholder"> block with your actual image/PDF/content.
 */
const AppendixSection = ({ label, title, children }) => (
  <div
    id={`appendix-${label.toLowerCase()}`}
    className="bg-white flex flex-col w-full text-left p-12 rounded-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100"
  >
    <div className="flex items-center border-b-2 border-b-blue-900 pb-3">
      <FaFileAlt className="h-6 w-6 mr-3 text-blue-900" />
      <h2 className="text-xl font-bold text-blue-900">
        {label}. {title}
      </h2>
    </div>
    <div className="mt-6">
      {children ?? (
        <div className="flex items-center justify-center h-48 rounded-xl border-2 border-dashed border-blue-200 bg-blue-50">
          <p className="text-blue-400 text-sm">[ Attach {title} here ]</p>
        </div>
      )}
    </div>
  </div>
);

const Appendices = () => (
  <div className="min-h-full flex flex-col items-center justify-between text-gray-800 gap-10">
    {/* Chapter Header */}
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

    {/* One section per appendix item */}
    {appendixItems.map(({ label, title }) => (
      <AppendixSection key={label} label={label} title={title} />
    ))}
  </div>
);

export default Appendices;
