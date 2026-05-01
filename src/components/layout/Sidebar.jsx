import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  FolderOpen,
  Building2,
  BriefcaseBusiness,
  ClipboardCheck,
  FileStack,
} from "lucide-react";
import profile from "../../assets/images/profile.jpg";

const Sidebar = ({ closeSidebar }) => {
  const menuItems = [
    { to: "/", label: "Title Page", icon: HomeIcon },
    {
      to: "/introduction",
      label: "I. Introduction",
      icon: FolderOpen,
    },
    {
      to: "/company",
      label: "II. Company Profile",
      icon: Building2,
    },
    {
      to: "/work-experience",
      label: "III. Work Experience",
      icon: BriefcaseBusiness,
    },
    {
      to: "/assessment",
      label: "IV. Assessment",
      icon: ClipboardCheck,
    },
    {
      to: "/appendices",
      label: "Appendices",
      icon: FileStack,
    },
  ];

  return (
    <aside className="m-2 w-60 h-full rounded-sm bg-white shadow-md flex flex-col">
      {/* PROFILE SECTION */}
      <div className="flex flex-col items-center p-6">
        <img
          src={profile}
          alt="Profile"
          className="h-20 w-20 rounded-md object-cover border-2 border-blue-800"
        />

        <h3 className="mt-3 text-base font-semibold text-blue-900">
          Reinz Justine Dagang
        </h3>
        <h3 className="mt-1 text-sm font-normal text-blue-800">
          Web Developer / OJT Student
        </h3>
      </div>

      <hr className="border-gray-200" />

      <h3 className="p-4 text-sm font-semibold text-gray-500">
        E - PORTFOLIO CONTENTS
      </h3>

      {/* NAVIGATION */}
      <nav className="flex-1 space-y-2">
        {menuItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => closeSidebar?.()}
            className={({ isActive }) =>
              `flex items-center text-base px-4 py-2 transition ${
                isActive
                  ? "bg-blue-800 text-white font-semibold"
                  : "text-blue-950 hover:bg-gray-100"
              }`
            }
          >
            <Icon className="h-5 w-5 mr-3" />
            {label}
          </NavLink>
        ))}
      </nav>

      <hr className="border-gray-200" />

      {/* FOOTER */}
      <div className="p-4 text-center text-sm font-semibold text-blue-800">
        DevOps Outsourcing Inc.
      </div>
    </aside>
  );
};

export default Sidebar;
