import { BookOpenText, CalendarClock, Laptop, Target } from "lucide-react";
import bg from "../assets/images/bg.jpg";
import { AppCard, Card, Paragraph } from "../components/Components";
import { SiGooglemeet, SiSlack } from "react-icons/si";
import { TbBrandGmail, TbFileSpreadsheet } from "react-icons/tb";
import { FaChrome, FaUsersLine } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { Gi3dStairs, GiBrainFreeze, GiLightBulb } from "react-icons/gi";

import { MdAutoGraph } from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";

const Introduction = () => {
  return (
    <div className="min-h-full flex flex-col items-center justify-between text-gray-800 gap-10">
      <div
        id="title-page"
        style={{ backgroundImage: `url(${bg})` }}
        className="relative flex flex-col items-center w-full text-center p-12 rounded-b-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100 bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-white/80 rounded-lg pointer-events-none"></div>
        <div className="relative z-10">
          <p className="text-blue-900 font-bold text-base">CHAPTER I</p>
          <h1 className="text-4xl sm:text-4xl md:text-3xl lg:text-6xl text-blue-900 font-bold mb-4 border-b-4 border-blue-900 w-max mx-auto">
            Introduction
          </h1>
          <p className="text-2xl text-gray-600 mb-14">
            Foundation and Framework of Internship Program
          </p>
        </div>
      </div>

      <div
        id="importance-of-internship"
        className="bg-white flex flex-col w-full flex-1 text-left p-12 rounded-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100"
      >
        <div className="flex items-center border-b-2 border-b-blue-900 ">
          <BookOpenText className="h-8 w-8 mr-3 text-blue-900" />
          <h2 className="text-2xl font-bold text-blue-900 leading-none">
            A. Importance of Internship
          </h2>
        </div>
        <div className="mt-6 space-y-4">
          <Paragraph textSize="xl" textColor="blue-900" fontType="semibold">
            Bridging Knowledge and Real-World Experience
          </Paragraph>
          <Paragraph>
            Internship plays a vital role in our development as future IT
            professionals because it allows us to apply the knowledge we learned
            in school into real-world situations. It serves as a bridge between
            academic theories and actual workplace experience, exposing us to
            challenges that cannot be fully taught inside the classroom.
          </Paragraph>
          <Paragraph>
            Through this internship, we are able to improve both our technical
            and personal skills such as teamwork, communication, time
            management, and adaptability. It also helps us understand our
            strengths and interests in the IT field while preparing us for our
            future careers with more confidence, discipline, and clear direction
            after graduation.
          </Paragraph>
        </div>
      </div>

      <div
        id="objectives-of-internship"
        className="bg-white flex flex-col w-full flex-1 text-left p-12 rounded-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100"
      >
        <div className="flex items-center border-b-2 border-b-blue-900 ">
          <Target className="h-8 w-8 mr-3 text-blue-900" />
          <h2 className="text-2xl font-bold text-blue-900 leading-none">
            B. Objectives of Internship
          </h2>
        </div>
        <div className="mt-6 space-y-4">
          <Paragraph textSize="xl" textColor="blue-900" fontType="semibold">
            Developing Industry-Ready IT Professionals
          </Paragraph>
          <Paragraph>
            The internship aims to provide us with practical experience in
            business analysis and web development by allowing us to work on
            real-world tasks and projects. Through this experience, we are
            exposed to system processes, basic requirements analysis, and actual
            workflows that help us understand how technology is applied in a
            professional environment.
          </Paragraph>
        </div>
        <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center relative z-10">
          <Card
            icon={GiBrainFreeze}
            title="Technical Experience"
            content="To enhance our technical skills by practicing web development and improving our understanding of tools and technologies used in building systems."
          />
          <Card
            icon={Gi3dStairs}
            title="Career Foundation"
            content="To build a strong foundation for future roles such as junior business analyst, web developer, or other IT-related positions through hands-on experience."
          />
          <Card
            icon={GiLightBulb}
            title="Problem-Solving Skills"
            content="To improve our analytical and problem-solving abilities by encountering real challenges and learning how to find effective solutions."
          />
          <Card
            icon={FaUsersLine}
            title="Communication and Collaboration"
            content="To develop our communication skills and learn how to work effectively with team members, mentors, and professionals in a work setting."
          />
          <Card
            icon={MdAutoGraph}
            title="Professional Growth"
            content="To prepare ourselves for the industry by developing discipline, responsibility, and adaptability in a real work environment."
          />
          <Card
            icon={BsBuildingsFill}
            title="Industry Readiness"
            content="To prepare us to become industry-ready IT professionals by equipping us with the necessary technical skills, real-world experience, and professional mindset needed to succeed in the technology field."
          />
        </div>
        <div className="mt-6 space-y-4">
          <Paragraph>
            Overall, the internship helps us grow both technically and
            professionally, preparing us for future careers in the IT industry
            with confidence and practical experience.
          </Paragraph>
        </div>
      </div>

      <div
        id="time-and-place"
        className="bg-white flex flex-col w-full flex-1 text-left p-12 rounded-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100"
      >
        <div className="flex items-center border-b-2 border-b-blue-900 ">
          <CalendarClock className="h-8 w-8 mr-3 text-blue-900" />
          <h2 className="text-2xl font-bold text-blue-900 leading-none">
            C. Time and Place of Internship
          </h2>
        </div>
        <div className="mt-6 space-y-4">
          <Paragraph>
            This On-The-Job-Training started on Febraury 2, 2026, that ended on
            May 5, 2026.
          </Paragraph>
        </div>
        <div className="mt-6 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="flex items-center gap-3 p-4 bg-blue-50 border-b border-gray-200">
            <Laptop className="h-7 w-7 text-blue-900" />
            <p className="text-blue-900 text-xl font-semibold">
              Virtual Training Environment
            </p>
          </div>

          <div className="p-5 space-y-4">
            <Paragraph>
              The training was conducted virtually using the following online
              platforms:
            </Paragraph>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {/* Item */}
              <AppCard icon={SiGooglemeet} name="Google Meet" />
              <AppCard icon={SiSlack} name="Slack" />
              <AppCard icon={TbBrandGmail} name="Gmail" />
              <AppCard icon={TbFileSpreadsheet} name="Google Sheets" />
              <AppCard icon={FaChrome} name="Mobbiz Apps Website" />
              <AppCard
                icon={IoPhonePortraitOutline}
                name="Mobbiz Mobile Application"
              />
            </div>
          </div>
        </div>
        <table className="mt-6 w-full text-left">
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="py-3 font-semibold text-gray-700 w-1/3">Role:</td>
              <td className="py-3 text-gray-900">Business Analyst</td>
            </tr>

            <tr className="border-b border-gray-100">
              <td className="py-3 font-semibold text-gray-700">
                Working Hours:
              </td>
              <td className="py-3 text-gray-900">
                8:00 AM to 5:00 PM, Monday to Friday
              </td>
            </tr>

            <tr className="border-b border-gray-100">
              <td className="py-3 font-semibold text-gray-700">Total Hours:</td>
              <td className="py-3 text-gray-900">487 hours</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-6 w-full text-left">
          <Paragraph>
            This opportunity has allowed us, as Business Analyst interns, to
            gain valuable real-world experience while contributing to Mobbiz, a
            company that provides software-as-a-service solutions. During our
            internship, we were able to learn and understand key concepts such
            as business processes, workflows, roles and permissions, business
            rules, PDF templates, and automation. These experiences helped us
            see how systems are structured and managed in an actual working
            environment. It also allowed us to go beyond theoretical knowledge
            and develop our analytical thinking, giving us a deeper
            understanding of how business and technology work together in
            real-world scenarios.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
