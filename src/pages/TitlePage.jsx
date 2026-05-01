import { Brain, HandHeart, List, NotebookPen } from "lucide-react";
import ojt_logo from "../assets/images/ojt_logo.png";
import InfoCard from "../components/InfoCard";
import { SubChapter, TopChapter } from "../components/TableContents";
import { Paragraph } from "../components/Components";
import { LiaPrayingHandsSolid } from "react-icons/lia";
import bg from "../assets/images/bg.jpg";

const TitlePage = () => {
  return (
    <div className="min-h-full flex flex-col items-center justify-between text-gray-800 gap-10">
      <div
        id="title-page"
        style={{ backgroundImage: `url(${bg})` }}
        className="relative flex flex-col items-center w-full flex-1 text-center p-12 rounded-b-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100 bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-white/80 rounded-lg pointer-events-none"></div>

        <div className="relative z-10">
          <img
            src={ojt_logo}
            alt="OJT Portfolio"
            className="h-28 w-auto mb-6 object-contain"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-900 font-bold mb-4">
            ON-THE-JOB-TRAINING
          </h1>
          <p className="text-2xl text-gray-600 mb-14">
            COLLEGE OF ART, SCIENCE, AND TECHNOLOGY
          </p>
        </div>
        <div className="mt-9 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center relative z-10">
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
        className="bg-white flex flex-col w-full flex-1 text-left p-12 rounded-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100"
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
            to="/introduction#importance-of-internship"
          />
          <SubChapter
            title="B. Objectives of Internship"
            to="/introduction#objectives-of-internship"
          />
          <SubChapter
            title="C. Time and Place"
            to="/introduction#time-and-place"
          />
          <TopChapter
            title="Chapter II: Company Profile"
            to="/company#company-profile"
          />
          <SubChapter
            title="A. Nature of the Agency"
            to="/company#nature-of-the-agency"
          />
          <SubChapter
            title="B. Mission/Vision/Goal Statement"
            to="/company#mission-vision"
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
            title="C. Photocopy Validated ID"
            to="/photocopy-validates-id"
          />
          <SubChapter title="D. Parent's Consent" to="/parents-consent" />
          <SubChapter
            title="E. Medical Certificate"
            to="/medical-certificate"
          />
          <SubChapter
            title="F. Certificate of Good Moral Character & Application Letter"
            to="/certificate-of-good-moral-character-and-application-letter"
          />
          <SubChapter title="G. Application Letter" to="/application-letter" />
          <SubChapter title="H. Endorsement Letter" to="/endorsement-letter" />
          <SubChapter
            title="I. Memorandum of Agreement"
            to="/memorandum-of-agreement"
          />
          <SubChapter
            title="J. Daily Time Record (Time Card)"
            to="/daily-time-record"
          />
          <SubChapter
            title="K. Certificate of Completion"
            to="/certificate-of-completion"
          />
          <SubChapter
            title="L. Certificate of Clearance"
            to="/certificate-of-clearance"
          />
          <SubChapter
            title="M. Pictures during Pre-Service Seminar"
            to="/pictures-during-pre-service-seminar"
          />
          <SubChapter
            title="N. Pictures during Office Works"
            to="/pictures-during-office-works"
          />
          <SubChapter
            title="O. Code of Ethics for CAST Student Internship"
            to="/code-of-ethics-for-cast-student-internship"
          />
          <SubChapter title="P. Curriculum Vitae" to="/curriculum-vitae" />
          <SubChapter
            title="Q. On-the-Job Training Portfolio Evaluation Form"
            to="/on-the-job-training-portfolio-evaluation-form"
          />
        </div>
      </div>

      <div
        id="acknowledgements"
        className="bg-white flex flex-col w-full flex-1 text-left p-12 rounded-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100"
      >
        <div className="flex items-center border-b-2 border-b-blue-900 ">
          <HandHeart className="h-8 w-8 mr-3 text-blue-900" />
          <h2 className="text-2xl font-bold text-blue-900 leading-none">
            Acknowledgement
          </h2>
        </div>
        <div className="mt-6 space-y-4">
          <Paragraph>
            I would like to express my heartfelt thanks to everyone who
            supported me throughout my On-the-Job Training journey.
          </Paragraph>
          <Paragraph>
            To our OJT coordinator,{" "}
            <b className="text-blue-900">Ms. Marites D. Escultor</b>, thank you
            for your guidance, encouragement, and constant support.
          </Paragraph>
          <Paragraph>
            To DevOps Outsourcing Inc., especially{" "}
            <b className="text-blue-900">
              Mr. Borja Hernandez, Ms. Regina Clautero, Ms. Andrea Castillo, Ms.
              Rechel Cataluna Punsalan, Ms. Gretchen Failanga, Mr. Ralph Andal,
              Ms. Laarni Castro, Mr. Eldrich Jonelle Guillermo,
            </b>{" "}
            and <b className="text-blue-900">Ms. Jan Mary Arzadon </b> — thank
            you for sharing your knowledge, mentorship, and valuable life
            lessons.
          </Paragraph>
          <Paragraph>
            To my fellow interns,{" "}
            <b className="text-blue-900">Mr. John Mark Salvattera</b>,{" "}
            <b className="text-blue-900">Ms. Luiza Corine Prado</b>, and{" "}
            <b className="text-blue-900">Mr. Meljohn Mateo</b> — thank you for
            the teamwork, support, and fun moments we shared.
          </Paragraph>
          <Paragraph>
            To <b className="text-blue-900">my family and friends</b>, thank you
            for your unwavering love, encouragement, and understanding
            throughout this journey.
          </Paragraph>
          <Paragraph>
            And most of all, to <b className="text-blue-900">Almighty God</b>,
            thank You for the strength, wisdom, and guidance in completing this
            training.
          </Paragraph>
          <Paragraph>
            This OJT experience has been invaluable, and I am deeply grateful to
            everyone who contributed to making it a success.
          </Paragraph>
        </div>
      </div>

      <div
        id="student-trainee-prayer"
        className="bg-white flex flex-col w-full flex-1 text-left p-12 rounded-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100"
      >
        <div className="flex items-center border-b-2 border-b-blue-900 ">
          <LiaPrayingHandsSolid className="h-8 w-8 mr-3 text-blue-900" />
          <h2 className="text-2xl font-bold text-blue-900 leading-none">
            Student Trainee Prayer
          </h2>
        </div>
        <div className="mt-6 space-y-4">
          <Paragraph>
            <i>
              <b className="text-blue-900">Dear Heavenly Father,</b>
            </i>
          </Paragraph>
          <Paragraph>
            <i>
              We come before You with grateful hearts as we begin and continue
              our on-the-job training. Thank You for the opportunity to learn,
              to grow, and to apply the knowledge we have gained in school into
              real-life experiences. Guide us each day as we face new
              challenges, responsibilities, and decisions.
            </i>
          </Paragraph>
          <Paragraph>
            <i>
              Grant us wisdom to understand our tasks, patience to improve our
              skills, and strength to overcome difficulties. Help us to be
              diligent, respectful, and responsible in all that we do. May we
              build good relationships with our supervisors, co-workers, and
              everyone we encounter, showing kindness, humility, and
              professionalism.
            </i>
          </Paragraph>
          <Paragraph>
            <i>
              Protect us from harm and keep us focused on our goals. Remind us
              to always do our best, not only for our own success, but also to
              bring honor to our families, our school, and to You.
            </i>
          </Paragraph>
          <Paragraph>
            <i>
              As we continue this journey, may we grow not only in knowledge and
              competence but also in character and integrity. Lead us toward a
              future filled with purpose and meaningful opportunities.
            </i>
          </Paragraph>
          <Paragraph>
            <i>All this we ask in Your holy name.</i>
          </Paragraph>
          <Paragraph align="right">
            <i className="flex-end">Amen.</i>
          </Paragraph>
        </div>
      </div>

      <div
        id="personal-philosophy"
        className="bg-white flex flex-col w-full flex-1 text-left p-12 rounded-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100"
      >
        <div className="flex items-center border-b-2 border-b-blue-900 ">
          <Brain className="h-8 w-8 mr-3 text-blue-900" />
          <h2 className="text-2xl font-bold text-blue-900 leading-none">
            Personal Philosophy
          </h2>
        </div>
        <div className="mt-6 space-y-4">
          <Paragraph textSize="xl" textColor="blue-900">
            <i>“Growth Through Learning and Purpose”</i>
          </Paragraph>
          <Paragraph>
            I believe that life is a continuous journey of learning and growth.
            Every experience, whether success or failure, helps shape my
            character and improve who I am.
          </Paragraph>
          <Paragraph>
            I value hard work, discipline, and perseverance as keys to achieving
            success. I always strive to give my best in everything I do, knowing
            that consistent effort leads to improvement.
          </Paragraph>
          <Paragraph>
            I also believe in treating others with respect, kindness, and
            humility, as good relationships are important in both personal and
            professional life.
          </Paragraph>
          <Paragraph>
            With faith, purpose, and integrity, I aim to grow continuously and
            become a better version of myself each day.
          </Paragraph>
        </div>
      </div>

      <div
        id="career-plan"
        className="bg-white flex flex-col w-full flex-1 text-left p-12 rounded-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100"
      >
        <div className="flex items-center border-b-2 border-b-blue-900 ">
          <NotebookPen className="h-8 w-8 mr-3 text-blue-900" />
          <h2 className="text-2xl font-bold text-blue-900 leading-none">
            Career Plan
          </h2>
        </div>
        <div className="mt-6 space-y-4">
          <Paragraph textColor="blue-900" textSize="xl" fontType="semibold">
            Immediate Goals (0-6 Months)
          </Paragraph>
          <Paragraph>
            I aim to continuously improve my knowledge in web development while
            strengthening my experience in business analysis, with the goal of
            becoming a Junior Business Analyst. I also plan to create more
            projects to enhance my skills and improve my GitHub portfolio, while
            exploring opportunities such as working as a virtual assistant or
            remote work to gain experience and support my growth in the tech
            industry.
          </Paragraph>

          <Paragraph textColor="blue-900" textSize="xl" fontType="semibold">
            Skill Development Focus
          </Paragraph>
          <Paragraph>
            I plan to study and master React as my current skills are still not
            strong enough, while also improving my backend development skills in
            Node.js and learning React Native for mobile development. In
            addition, I want to gain basic knowledge in DevOps to better
            understand deployment and modern development workflows. I also aim
            to take freelance projects to apply and enhance my skills in
            real-world scenarios, and improve my communication skills so I can
            effectively interact with future clients. Overall, my goal is to
            continuously grow as a developer by strengthening both my technical
            and soft skills through consistent learning and practice.
          </Paragraph>

          <Paragraph textColor="blue-900" textSize="xl" fontType="semibold">
            Long-Term Vision
          </Paragraph>
          <Paragraph>
            In the long term, I aim to grow into a skilled professional in both
            software development and business analysis, eventually becoming a
            full-stack developer or a senior business analyst. I want to
            continuously build my expertise by working on real-world systems,
            contributing to meaningful projects, and applying technology to
            solve practical problems. I also hope to develop solutions that can
            benefit underserved communities, especially in my hometown in
            Occidental Mindoro. Ultimately, my goal is to build a stable and
            fulfilling career while making a positive impact through technology
            and continuous innovation.
          </Paragraph>
          <hr className="border-gray-200" />
          <Paragraph textColor="blue-900" textSize="xl" fontType="semibold">
            Personal Commitment
          </Paragraph>
          <Paragraph>
            I am committed to continuously improving my skills and knowledge in
            web development and business analysis through consistent learning
            and practice. I will dedicate myself to building more projects,
            strengthening my GitHub portfolio, and gaining real-world experience
            through internships, freelance work, or remote opportunities. I also
            commit to developing my communication skills to effectively work
            with clients and teams in the future. Above all, I will remain
            disciplined, persistent, and open to learning, with the goal of
            growing into a competent and responsible professional in the tech
            industry.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
