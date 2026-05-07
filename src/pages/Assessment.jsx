import bg from "../assets/images/bg.jpg";
import { TbAnalyzeFilled } from "react-icons/tb";
import evaluation from "../pdf/eval.pdf";
import { Paragraph } from "../components/Components";
import RatingsOverview from "../components/RatingsOverview";

const Assessment = () => {
  return (
    <div className="min-h-full flex flex-col items-center justify-between text-gray-800 gap-10">
      <div
        id="title-page"
        style={{ backgroundImage: `url(${bg})` }}
        className="relative flex flex-col items-center w-full text-center p-12 rounded-b-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100 bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-white/80 rounded-lg pointer-events-none"></div>
        <div className="relative z-10">
          <p className="text-blue-900 font-bold text-base">CHAPTER IV</p>
          <h1 className="text-4xl sm:text-4xl md:text-3xl lg:text-6xl text-blue-900 font-bold mb-4 border-b-4 border-blue-900 w-max mx-auto">
            Assessment
          </h1>
          <p className="text-2xl text-gray-600 mb-14">
            Evaluation and Performance Review
          </p>
        </div>
      </div>

      <div
        id="student-internship-evaluation"
        className="bg-white flex flex-col w-full flex-1 text-left p-12 rounded-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100"
      >
        <div className="flex items-center border-b-2 border-b-blue-900 ">
          <TbAnalyzeFilled className="h-8 w-8 mr-3 text-blue-900" />
          <h2 className="text-2xl font-bold text-blue-900 leading-none">
            C. Student Internship Evaluation Form
          </h2>
        </div>

        <div className="mt-6 gap-6 grid grid-cols-1 place-items-start">
          <div className="w-full">
            <div className="w-full h-150 border rounded-lg overflow-hidden shadow">
              <iframe
                src={evaluation}
                title="progress report"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <Paragraph textColor="blue-900" textSize="xl" fontType="semibold">
            Performance Evaluation Summary
          </Paragraph>
          <RatingsOverview />
        </div>
      </div>
    </div>
  );
};

export default Assessment;
