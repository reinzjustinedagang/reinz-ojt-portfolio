import bg from "../assets/images/bg.jpg";
import { LiaCalendarWeekSolid } from "react-icons/lia";
import WeeklyReportCard from "../components/WeeklyReportCard";
import { weeklyReports } from "../data/weeklyReports";
import { useState } from "react";
import { dailyTimeRecords } from "../data/dailyTimeRecords";
import progress_report from "../pdf/progress.pdf";
import analysis_report from "../pdf/analysis-report.pdf";
import { MdAccessTime } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { TbAnalyzeFilled } from "react-icons/tb";

const WorkExperience = () => {
  const [selectedWeek, setSelectedWeek] = useState(weeklyReports[0].id);
  const [selectedType, setSelectedType] = useState("All");

  const selectedData = weeklyReports.find((week) => week.id === selectedWeek);

  const filteredPDFs = dailyTimeRecords.filter(
    (item) => item.type === selectedType,
  );

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
        className="bg-white flex flex-col w-full flex-1 text-left p-12 rounded-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100"
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
        <div className="mt-6 space-y-4">
          <div className="flex items-center">
            <label htmlFor="cars" className="text-blue-900 font-semibold mr-3">
              Select Type:
            </label>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-white border border-blue-900 text-blue-900 font-medium px-4 py-2 rounded-lg shadow-sm 
  focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 cursor-pointer"
            >
              <option value="All">All</option>
              <option value="Meeting">Meeting</option>
              <option value="Activity">Activity</option>
              <option value="Regression Testing">Regression Testing</option>
              <option value="Data Encoding">Data Encoding</option>
            </select>
          </div>
        </div>
        <div
          className={`mt-6 gap-6 ${
            filteredPDFs.length === 1
              ? "grid grid-cols-1 place-items-start"
              : "grid grid-cols-1 md:grid-cols-2"
          }`}
        >
          {filteredPDFs.map((item) => (
            <div key={item.id} className="w-full">
              <div className="w-full h-150 border rounded-lg overflow-hidden shadow">
                <iframe
                  src={item.source}
                  title={item.id}
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
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
