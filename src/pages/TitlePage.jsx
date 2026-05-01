import { List } from "lucide-react";
import ojt_logo from "../assets/images/ojt_logo.png";
import InfoCard from "../components/InfoCard";
import { SubChapter, TopChapter } from "../components/TableContents";

const TitlePage = () => {
  return (
    <div className="min-h-full flex flex-col items-center justify-between text-gray-800 gap-10">
      <div
        id="title-page"
        className="bg-white flex flex-col items-center w-full flex-1 text-center p-12 rounded-lg border-t-5 border-t-blue-900 border-b-2 border-b-gray-100"
      >
        <div>
          <img
            src={ojt_logo}
            alt="OJT Portfolio"
            className="h-28 w-auto mb-6 object-contain"
          />
        </div>
        <div>
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-900 font-bold mb-4">
            ON-THE-JOB-TRAINING
          </h1>
          <p className="text-2xl text-gray-600 mb-14">
            COLLEGE OF ART, SCIENCE, AND TECHNOLOGY
          </p>
        </div>
        <div className="mt-9 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <InfoCard
            title="Student Name"
            description="Reinz Justine G. Dagang"
          />
          <InfoCard title="Student ID" description="MA22-IT-06284" />
          <InfoCard
            title="Course & Year"
            description="Bachelor of Science in Information Technology, 4th Year"
          />
          <InfoCard
            title="Internship Period"
            description="February 2, 2026 - May 5, 2026"
          />
          <InfoCard
            title="Host Company"
            description="DevOps Outsourcing Inc."
          />
          <InfoCard title="Adviser" description="Marites D. Escultor, MSIT" />
        </div>
      </div>
      <div
        id="table-of-contents"
        className="bg-white flex flex-col w-full flex-1 text-left p-12 rounded-lg border-t-5 border-t-blue-900 border-b-2 border-b-gray-100"
      >
        <div className="flex items-center border-b-2 border-b-blue-900 ">
          <List className="h-8 w-8 mr-3 text-blue-900" />
          <h2 className="text-2xl font-bold text-blue-900 leading-none">
            Table of Contents
          </h2>
        </div>
        <div className="mt-6 space-y-4">
          <TopChapter title="Title Page" to="#title-page" />
          <TopChapter title="Table of Contents" to="#table-of-contents" />
          <TopChapter title="Acknowledgements" to="#acknowledgements" />
          <TopChapter
            title="Student Trainee Prayer"
            to="#student-trainee-prayer"
          />
          <TopChapter title="Personal Philosophy" to="#personal-philosophy" />
          <TopChapter title="Career Plan" to="#career-plan" />
          <TopChapter title="Chapter I: Introduction" to="/introduction" />
          <SubChapter
            title="A. Importance of Internship"
            to="/importance-of-internship"
          />
          <SubChapter
            title="B. Objectives of Internship"
            to="/objectives-of-internship"
          />
          <SubChapter title="C. Time and Place" to="/time-and-place" />
          <TopChapter
            title="Chapter II: Company Profile"
            to="/company-profile"
          />
          <SubChapter
            title="A. Nature of the Agency"
            to="/nature-of-the-agency"
          />
          <SubChapter
            title="B. Mission/Vision/Goal Statement"
            to="/mission-vision-goal-statement"
          />
          <SubChapter
            title="C.History/Background of the Agency/Office"
            to="/history-background-of-the-agency-office"
          />
          <SubChapter
            title="D. Organizational Structure"
            to="/organizational-structure"
          />
          <TopChapter
            title="Chapter III: Work Experiences"
            to="/work-experience"
          />
          <SubChapter
            title="A. Weekly Accomplishment Report"
            to="/weekly-accomplishment-report"
          />
          <SubChapter title="B. Daily Time Record" to="/daily-time-record" />
          <SubChapter
            title="C. Internship Progress Report"
            to="/internship-progress-report"
          />
          <SubChapter
            title="D. Internship Analysis Report"
            to="/internship-analysis-report"
          />
          <TopChapter
            title="Chapter IV: Assessment of the Practicum Program"
            to="/assessment"
          />
          <SubChapter
            title="A. Student Internship Evaluation"
            to="/student-internship-evaluation Form"
          />
          <TopChapter title="Chapter V: Appendices" to="/appendices" />
          <SubChapter title="A. Evaluation Form" to="/evaluation-form" />
          <SubChapter
            title="B. Photocopy Registration Form"
            to="/photocopy-registration-form"
          />
          <SubChapter
            title="A. Photocopy Validated ID"
            to="/photocopy-validates-id"
          />
          <SubChapter title="A. Parent's Consent" to="/parents-consent" />
          <SubChapter
            title="A. Medical Certificate"
            to="/medical-certificate"
          />
          <SubChapter
            title="A. Certificate of Good Moral Character & Application Letter"
            to="/certificate-of-good-moral-character-and-application-letter"
          />
          <SubChapter title="A. Application Letter" to="/application-letter" />
          <SubChapter title="A. Endoresement Letter" to="/endorsement-letter" />
          <SubChapter
            title="A. Memorandum of Agreement"
            to="/memorandum-of-agreement"
          />
          <SubChapter
            title="A. Daily Time Record (Time Card)"
            to="/daily-time-record"
          />
          <SubChapter
            title="A. Certificate of Completion"
            to="/certificate-of-completion"
          />
          <SubChapter
            title="A. Certificate of Clearance"
            to="/certificate-of-clearance"
          />
          <SubChapter
            title="A. Pictures during Pre-Service Seminar"
            to="/pictures-during-pre-service-seminar"
          />
          <SubChapter
            title="A. Pictures during Office Works"
            to="/pictures-during-office-works"
          />
          <SubChapter
            title="A. Code of Ethics for CAST Student Internship"
            to="/code-of-ethics-for-cast-student-internship"
          />
          <SubChapter title="A. Curriculum Vitae" to="/curriculum-vitae" />
          <SubChapter
            title="A. On-the-Job Training Portfolio Evaluation Form"
            to="/on-the-job-training-portfolio-evaluation-form"
          />
        </div>
      </div>
      <div
        id="acknowledgements"
        className="bg-white flex flex-col w-full flex-1 text-left p-12 rounded-lg border-t-5 border-t-blue-900 border-b-2 border-b-gray-100"
      >
        <div className="flex items-center border-b-2 border-b-blue-900 ">
          <List className="h-8 w-8 mr-3 text-blue-900" />
          <h2 className="text-2xl font-bold text-blue-900 leading-none">
            Acknowledgement
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
