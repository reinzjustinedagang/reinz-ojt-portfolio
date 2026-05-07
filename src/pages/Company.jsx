import { BookOpenText } from "lucide-react";
import bg from "../assets/images/bg.jpg";
import {
  FaCartFlatbed,
  FaChrome,
  FaHandshake,
  FaHeart,
  FaLocationDot,
  FaStar,
  FaUsers,
  FaUsersLine,
} from "react-icons/fa6";
import { MdAutoGraph, MdSupportAgent } from "react-icons/md";
import {
  GiBookAura,
  GiEyeTarget,
  GiFamilyTree,
  GiPublicSpeaker,
  GiTrumpetFlag,
} from "react-icons/gi";
import { FaCogs, FaPeopleCarry } from "react-icons/fa";
import { PiFlagBannerFoldFill } from "react-icons/pi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BsBuildingsFill } from "react-icons/bs";
import { IoIosPeople, IoMdCalendar, IoMdFlash } from "react-icons/io";
import devops from "../assets/images/devops.png";
import { AppCard, Card, Paragraph } from "../components/Components";
import { RiLeafLine } from "react-icons/ri";
import ImageCard from "../components/ImageCard";
import image1 from "../assets/company/image1.png";
import image2 from "../assets/company/image2.png";
import image5 from "../assets/company/image5.png";
import image4 from "../assets/company/image4.png";
import chart1 from "../assets/organization/image1.jpg";
import chart2 from "../assets/organization/image2.jpg";
import chart3 from "../assets/organization/image3.jpg";
import chart4 from "../assets/organization/image4.jpg";
import { VscServerProcess } from "react-icons/vsc";
import { TbSettingsAutomation } from "react-icons/tb";

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
          <div
            className="group w-60 h-60 p-4 shrink-0 shadow-md rounded-xl flex items-center justify-center
  transition-all duration-300 ease-out
  hover:shadow-xl hover:-translate-y-2 hover:scale-105 cursor-pointer"
          >
            <img
              src={devops}
              alt="DevOps Outsourcing Inc."
              className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-lg
    transition-all duration-300 ease-out
    group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-extrabold text-blue-900">
              DevOps Outsourcing Inc.
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Business Process Done Right.
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
        <div className="mt-6 w-full text-left">
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
            border="t"
          />
          <Card
            icon={MdAutoGraph}
            title="Growth Opportunities"
            content="Interns are given opportunities to participate in real tasks and presentations, helping them develop confidence and practical skills relevant to their field."
            iconSize="xl"
            h3Size="xl"
            pSize="base"
            border="t"
          />
          <Card
            icon={GiPublicSpeaker}
            title="Open Communication"
            content="The organization encourages clear and open communication, allowing interns to easily interact with senior staff and receive guidance when needed."
            iconSize="xl"
            h3Size="xl"
            pSize="base"
            border="t"
          />
          <Card
            icon={FaCogs}
            title="Adaptability"
            content="The company utilizes virtual platforms and flexible approaches, enabling interns to learn and perform tasks efficiently in a remote setup."
            iconSize="xl"
            h3Size="xl"
            pSize="base"
            border="t"
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

      <div
        id="history-and-background"
        className="bg-white flex flex-col w-full flex-1 text-left p-12 rounded-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100"
      >
        <div className="flex items-center border-b-2 border-b-blue-900 ">
          <RiLeafLine className="h-8 w-8 mr-3 text-blue-900" />
          <h2 className="text-2xl font-bold text-blue-900 leading-none">
            C. History and Background
          </h2>
        </div>

        <div className="mt-6 w-full text-left">
          <Paragraph>
            DevOps Outsourcing Inc. is a start-up company based in Makati,
            National Capital Region, Philippines. It was stablished in 2017 and
            specializes in offering business process consulting to companies,
            along with designing tailor-made IT solutions - mainly web and
            mobile applications made from scratch.
          </Paragraph>

          <Paragraph>
            The company operates under the principle that businesses should not
            have to bend their processes to fit rigid, mass-market software.
            Instead, DevOps craft custom solutions that truly address each
            client's unique challenges. Its flagship product, Mobbiz, is a
            Software-as-a-Service (SaaS) platform for business process
            management, built to serve real-world operational needs.
          </Paragraph>
          <Paragraph>
            Over the years, DevOps Outsourcing Inc. has grown into a trusted IT
            consulting firm, shifting the market away from one-size-fits-all
            solutions and delivering services clients can genuinely rely on.
          </Paragraph>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <AppCard icon={MdSupportAgent} name="Business Process Consulting" />
          <AppCard icon={FaChrome} name="Web Application Development" />
          <AppCard
            icon={IoPhonePortraitOutline}
            name="Mobile Application Development"
          />
        </div>
        <div className="mt-6 w-full text-left">
          <Paragraph textColor="blue-900" textSize="xl" fontType="semibold">
            Company Timeline
          </Paragraph>
          <Paragraph textColor="blue-900" fontType="semibold">
            2017 - Company Founded
          </Paragraph>
          <Paragraph>
            DevOps Outsourcing Inc. was established in Makati City, Philippines,
            as an IT services and consulting start-up with a mission to provide
            bespoke professional services. The company was built to address the
            nuanced challenges that mass-market software solutions fail to
            solve.
          </Paragraph>
          <Paragraph textColor="blue-900" fontType="semibold">
            2018-2020 - Mobbiz Saas Platform Development
          </Paragraph>
          <Paragraph>
            The company developed and launched Mobbiz - a Software-as-a-Service
            platform designed for business process management. This product
            became the core offering, allowing client businesses to manage
            operations digitally through both web and mobile applications.
          </Paragraph>
          <Paragraph textColor="blue-900" fontType="semibold">
            2021-2023 - Expansion of IT Services & Team Growth
          </Paragraph>
          <Paragraph>
            DevOps expanded its service offerings to include QA testing, system
            documentation, and requirements gathering - building a
            multi-disciplinary team of developers, business analysts, and QA
            engineers. The company also began collaborating with universities
            for student internship programs.
          </Paragraph>
          <Paragraph>
            <i>
              “Business Process Done Right. We believe you should not need to
              trade away value as part of scalable solutions or have to bend
              your business to rigid solutions - shifting the market away from a
              race to the bottom and bringing about services our clients can
              trust”
            </i>
            <p>- DevOps Outsourcing Inc. Mission Statement</p>
          </Paragraph>
        </div>
      </div>

      <div
        id="organizational-structural"
        className="bg-white flex flex-col w-full flex-1 text-left p-12 rounded-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100"
      >
        <div className="flex items-center border-b-2 border-b-blue-900 ">
          <GiFamilyTree className="h-8 w-8 mr-3 text-blue-900" />
          <h2 className="text-2xl font-bold text-blue-900 leading-none">
            D. Organizational Structure
          </h2>
        </div>

        <div className="my-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          <ImageCard image={chart1} />
          <ImageCard image={chart2} />
          <ImageCard image={chart3} />
          <ImageCard image={chart4} />
        </div>
      </div>

      <div
        id="products-and-service"
        className="bg-white flex flex-col w-full flex-1 text-left p-12 rounded-xl border-t-5 border-t-blue-900 border-b-2 border-b-gray-100"
      >
        <div className="flex items-center border-b-2 border-b-blue-900 ">
          <FaCartFlatbed className="h-8 w-8 mr-3 text-blue-900" />
          <h2 className="text-2xl font-bold text-blue-900 leading-none">
            E. Products and Service
          </h2>
        </div>
        <div className="mt-6 w-full text-left">
          <Paragraph>
            MOBBIZ Solutions delivers integrated products and services focused
            on business process improvement, smart technology implementation,
            and workforce outsourcing. These services help organizations
            streamline operations, reduce inefficiencies, and achieve
            sustainable growth.
          </Paragraph>
        </div>
        <div className="mt-6 w-full text-left space-y-6">
          <Card
            icon={VscServerProcess}
            title="Business Process Consulting"
            content="MOBBIZ Solutions offers Business Process Consulting services that
            help organizations analyze, refine, and optimize their operations to
            achieve greater efficiency and compliance. The company focuses on
            identifying inefficiencies, improving workflows, and aligning
            business processes with organizational goals to support long-term
            success. Through process optimization, compliance and risk
            management, and effective strategy execution, MOBBIZ ensures that
            operations are streamlined and performance-driven. In addition, the
            service provides value through workflow assessment, gap analysis,
            process re-engineering, automation strategies, and KPI-based
            performance tracking, enabling businesses to operate more
            effectively and make informed decisions."
            iconSize="xl"
            h3Size="xl"
            pSize="base"
          />
          <Card
            icon={TbSettingsAutomation}
            title="Technology Solutions"
            content="MOBBIZ Solutions provides Technology Solutions focused on developing
            and implementing custom platforms, smart applications, and
            automation tools designed to improve efficiency and support business
            growth. Leveraging its no-code Business Process Manager, the company
            enables organizations to automate repetitive tasks, reduce errors,
            and enhance workflow integration and data flow. Its services include
            the development of scalable, cloud-based systems such as custom
            business operations platforms, CRM solutions, and mobile and web
            applications, as well as system integration services tailored to
            specific business needs. Additionally, MOBBIZ incorporates
            purpose-driven artificial intelligence through embedded features and
            on-demand AI agents to further boost productivity and handle routine
            processes. These solutions deliver added value by reducing
            operational costs, improving efficiency and user experience, and
            enabling data-driven decision-making."
            iconSize="xl"
            h3Size="xl"
            pSize="base"
          />
          <Card
            icon={IoIosPeople}
            title="People Outsourcing"
            content="MOBBIZ Solutions offers People Outsourcing services that provide
            businesses with skilled professionals to support their operations
            without the complexities of in-house hiring. The company supplies a
            wide range of talent across various fields, including IT and digital
            support, software development and engineering, IT infrastructure,
            data and AI, business intelligence, cloud and DevOps, cybersecurity,
            project and product management, digital marketing, and BIM
            engineering. Through this service, organizations can access
            specialized expertise tailored to their needs while maintaining
            flexibility and scalability in their workforce. By combining process
            outsourcing with industry-specific knowledge, MOBBIZ enables
            businesses to reduce costs, improve efficiency, and focus on their
            core operations while ensuring high-quality and reliable talent
            support."
            iconSize="xl"
            h3Size="xl"
            pSize="base"
          />
        </div>
      </div>
    </div>
  );
};

export default Company;
