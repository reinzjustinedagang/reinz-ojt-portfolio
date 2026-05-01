import { BookOpenText } from "lucide-react";
import bg from "../assets/images/bg.jpg";
import {
  FaHandshake,
  FaHeart,
  FaLocationDot,
  FaStar,
  FaUsers,
  FaUsersLine,
} from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";
import { IoMdCalendar, IoMdFlash } from "react-icons/io";
import devops from "../assets/images/devops.png";
import { Card, Paragraph } from "../components/Components";
import { RiLeafLine } from "react-icons/ri";
import ImageCard from "../components/ImageCard";
import image1 from "../assets/company/image1.png";
import image2 from "../assets/company/image2.png";
import image5 from "../assets/company/image5.png";
import image4 from "../assets/company/image4.png";
import { MdAutoGraph } from "react-icons/md";
import {
  GiBookAura,
  GiEyeTarget,
  GiPublicSpeaker,
  GiTrumpetFlag,
} from "react-icons/gi";
import { FaCogs, FaPeopleCarry } from "react-icons/fa";
import { PiFlagBannerFoldFill } from "react-icons/pi";

const Company = () => {
  return (
    <div
      id="company-profile"
      className="min-h-full flex flex-col items-center justify-between text-gray-800 gap-10"
    >
      <div
        id="title-page"
        style={{ backgroundImage: `url(${bg})` }}
        className="relative flex flex-col items-center w-full text-center p-12 rounded-b-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100 bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-white/80 rounded-lg pointer-events-none"></div>
        <div className="relative z-10">
          <p className="text-blue-900 font-bold text-base">CHAPTER II</p>
          <h1 className="text-4xl sm:text-4xl md:text-3xl lg:text-6xl text-blue-900 font-bold mb-4 border-b-4 border-blue-900 w-max mx-auto">
            Company Profile
          </h1>
          <p className="text-2xl text-gray-600 mb-14">
            Overview and Insights of the Host Organization
          </p>
        </div>
      </div>

      <div className="bg-white flex flex-col w-full flex-1 text-left p-12 rounded-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100">
        <div className="flex items-center border-b-2 border-b-blue-900 ">
          <BookOpenText className="h-8 w-8 mr-3 text-blue-900" />
          <h2 className="text-2xl font-bold text-blue-900 leading-none">
            Company Overview
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-6 p-5">
          {/* Image */}
          <div className="w-60 h-60 p-4 shrink-0 shadow-md rounded-xl flex items-center justify-center">
            <img
              src={devops}
              alt="DevOps Outsourcing Inc."
              className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-extrabold text-blue-900">
              DevOps Outsourcing Inc.
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              <i>Business Process Done Right.</i>
            </p>

            {/* Info rows */}
            <div className="flex items-center gap-2 text-gray-700 text-base">
              <FaLocationDot className="text-blue-900" />
              <p>Makati, National Capital Region</p>
            </div>

            <div className="flex items-center gap-2 text-gray-700 text-base">
              <BsBuildingsFill className="text-blue-900" />
              <p>IT Services and IT Consulting</p>
            </div>

            <div className="flex items-center gap-2 text-gray-700 text-base">
              <FaUsers className="text-blue-900" />
              <p>11–50 employees</p>
            </div>

            <div className="flex items-center gap-2 text-gray-700 text-base">
              <IoMdCalendar className="text-blue-900" />
              <p>Est. 2017</p>
            </div>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <Paragraph>
            A start-up company specialized in offering business process
            consulting to companies along with designing tailor-made IT
            solutions for them, mainly web and mobile applications made from
            scratch.
          </Paragraph>
        </div>
      </div>

      <div
        id="nature-of-the-agency"
        className="bg-white flex flex-col w-full flex-1 text-left p-12 rounded-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100"
      >
        <div className="flex items-center border-b-2 border-b-blue-900 ">
          <RiLeafLine className="h-8 w-8 mr-3 text-blue-900" />
          <h2 className="text-2xl font-bold text-blue-900 leading-none">
            A. Nature of the Agency
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-6 p-5">
          <Paragraph>
            DevOps Outsourcing Inc. promotes a collaborative and innovative work
            environment that encourages open communication, continuous learning,
            and teamwork. The company also values work-life balance, creating a
            supportive space for both professional and personal growth.
          </Paragraph>
        </div>
        <div className="my-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          <ImageCard
            image={image1}
            content="Summer Health and Safety: A Guide to Beat the Init!.The company promotes employee well-being through engaging health and safety programs."
          />
          <ImageCard
            image={image2}
            content="Interns actively presenting tasks, reflecting the company's culture of open communication and accountability."
          />
          <ImageCard
            image={image5}
            content="A supportive environment where senior staff guide interns in business process development."
          />
          <ImageCard
            image={image4}
            content="Guided training sessions with practical application of business analysis tasks."
          />
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card
            icon={FaUsersLine}
            title="Supportive Culture"
            content="The company promotes a supportive environment where interns are guided by experienced professionals and encouraged to collaborate and learn continuously."
            iconSize="xl"
            h3Size="xl"
            pSize="base"
          />
          <Card
            icon={MdAutoGraph}
            title="Growth Opportunities"
            content="Interns are given opportunities to participate in real tasks and presentations, helping them develop confidence and practical skills relevant to their field."
            iconSize="xl"
            h3Size="xl"
            pSize="base"
          />
          <Card
            icon={GiPublicSpeaker}
            title="Open Communication"
            content="The organization encourages clear and open communication, allowing interns to easily interact with senior staff and receive guidance when needed."
            iconSize="xl"
            h3Size="xl"
            pSize="base"
          />
          <Card
            icon={FaCogs}
            title="Adaptability"
            content="The company utilizes virtual platforms and flexible approaches, enabling interns to learn and perform tasks efficiently in a remote setup."
            iconSize="xl"
            h3Size="xl"
            pSize="base"
          />
        </div>
      </div>

      <div
        id="mission-vision"
        className="bg-white flex flex-col w-full flex-1 text-left p-12 rounded-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100"
      >
        <div className="flex items-center border-b-2 border-b-blue-900 ">
          <GiTrumpetFlag className="h-8 w-8 mr-3 text-blue-900" />
          <h2 className="text-2xl font-bold text-blue-900 leading-none">
            B. Mission and Vision
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <Card
            icon={PiFlagBannerFoldFill}
            title="Mission"
            content="Our mission is to provide bespoke professional services for our clients to deliver in real-world contexts. Today, there are so many mass-market solutions that don't address our clients nuanced challenges. We believe you should not need to trade away value as part of scalable solutions or have to bend your business to rigid solutions. Shifting the market away from a race to the bottom and bringing about services our clients can trust."
            iconSize="xl"
            h3Size="xl"
            pSize="base"
            border="t"
          />
          <Card
            icon={GiEyeTarget}
            title="Vision"
            content="High-end custom services that deliver for 21st-century real-world needs through best-in-class talent and technology."
            iconSize="xl"
            h3Size="xl"
            pSize="base"
            border="t"
          />
        </div>
        <div className="mt-6 w-full text-left">
          <Card
            icon={GiBookAura}
            title="Values"
            content="At Mobbiz, our values shape how we work, collaborate, and deliver
            results—they guide our decisions and define how we build lasting
            relationships with our customers, partners, and team members, all
            while driving impactful and scalable business solutions."
            iconSize="xl"
            h3Size="xl"
            pSize="base"
            border="t"
          />
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card
            icon={FaHandshake}
            title="Trusted"
            content="Our expert team ensures accountability and reliability through transparent communication, consistently fulfilling your needs with our best interests at heart."
          />
          <Card
            icon={FaPeopleCarry}
            title="Community"
            content="We value collective effort and meaningful contributions, focusing on strong partnerships and care to create a lasting legacy."
          />
          <Card
            icon={FaHeart}
            title="Purposeful & Passionate"
            content="We are top experts committed to impactful work through our passion for technology and pursuit of excellence and innovation."
          />
          <Card
            icon={IoMdFlash}
            title="Agile"
            content="We deliver flexible, innovative solutions that evolve with your needs, ensuring continuous improvement and adaptation."
          />
          <Card
            icon={FaStar}
            title="Service Orientation"
            content="We anticipate our clients' needs by using our expertise to think beyond basic requirements, enhancing our clients experience."
          />
        </div>
      </div>
    </div>
  );
};

export default Company;
