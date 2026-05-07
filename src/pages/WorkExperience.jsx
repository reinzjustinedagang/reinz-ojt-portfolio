import bg from "../assets/images/bg.jpg";
import { LiaCalendarWeekSolid } from "react-icons/lia";
import WeeklyReportCard from "../components/WeeklyReportCard";
import { weeklyReports } from "../data/weeklyReports";
import { useState } from "react";
import progress_report from "../pdf/progress.pdf";
import analysis_report from "../pdf/analysis-report.pdf";
import { MdAccessTime } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { TbAnalyzeFilled } from "react-icons/tb";
import CalendarTimesheet from "../components/CalendarTimesheet";

const WorkExperience = () => {
  const [selectedWeek, setSelectedWeek] = useState(weeklyReports[0].id);
  const selectedData = weeklyReports.find((week) => week.id === selectedWeek);

  return (
    <div className="min-h-full flex flex-col items-center justify-between text-gray-800 gap-10">
      <div
        id="title-page"
        style={{ backgroundImage: `url(${bg})` }}
        className="relative flex flex-col items-center w-full text-center p-12 rounded-b-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100 bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-white/80 rounded-lg pointer-events-none"></div>
        <div className="relative z-10">
          <p className="text-blue-900 font-bold text-base">CHAPTER III</p>
          <h1 className="text-4xl sm:text-4xl md:text-3xl lg:text-6xl text-blue-900 font-bold mb-4 border-b-4 border-blue-900 w-max mx-auto">
            Work Experience
          </h1>
          <p className="text-2xl text-gray-600 mb-14">
            Practical Application and Professional Development
          </p>
        </div>
      </div>

      <div
        id="weekly-accomplishment-report"
        className="bg-white flex flex-col w-full flex-1 text-left p-12 rounded-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100 overflow-hidden"
      >
        <div className="flex items-center border-b-2 border-b-blue-900 ">
          <LiaCalendarWeekSolid className="h-8 w-8 mr-3 text-blue-900" />
          <h2 className="text-2xl font-bold text-blue-900 leading-none">
            A. Weekly Accomplishment Report
          </h2>
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex items-center">
            <label htmlFor="cars" className="text-blue-900 font-semibold mr-3">
              Select Week:
            </label>

            <select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value)}
              className="bg-white border border-blue-900 text-blue-900 font-medium px-4 py-2 rounded-lg shadow-sm 
  focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 cursor-pointer"
            >
              {weeklyReports.map((week) => (
                <option key={week.id} value={week.id}>
                  {week.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        {selectedData && <WeeklyReportCard {...selectedData} />}
      </div>

      <div
        id="daily-time-record"
        className="bg-white flex flex-col w-full flex-1 text-left p-12 rounded-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100"
      >
        <div className="flex items-center border-b-2 border-b-blue-900 ">
          <MdAccessTime className="h-8 w-8 mr-3 text-blue-900" />
          <h2 className="text-2xl font-bold text-blue-900 leading-none">
            B. Daily Time Record
          </h2>
        </div>
        <CalendarTimesheet />
      </div>

      <div
        id="internship-reports"
        className="bg-white flex flex-col w-full flex-1 text-left p-12 rounded-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100"
      >
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* C */}
          <div id="internship-progress-report" className="flex flex-col">
            <div className="flex items-center border-b-2 border-b-blue-900">
              <GiProgression className="h-8 w-8 mr-3 text-blue-900" />
              <h2 className="text-2xl font-bold text-blue-900 leading-none">
                C. Internship Progress Reports
              </h2>
            </div>

            <div className="mt-6 w-full h-125 border rounded-lg overflow-hidden shadow">
              <iframe
                src={progress_report}
                title="progress report"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* D */}
          <div id="internship-analysis-report" className="flex flex-col">
            <div className="flex items-center border-b-2 border-b-blue-900">
              <TbAnalyzeFilled className="h-8 w-8 mr-3 text-blue-900" />
              <h2 className="text-2xl font-bold text-blue-900 leading-none">
                D. Internship Analysis Reports
              </h2>
            </div>

            <div className="mt-6 w-full h-125 border rounded-lg overflow-hidden shadow">
              <iframe
                src={analysis_report}
                title="analysis report"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
