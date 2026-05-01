import { FaGithub, FaFacebook } from "react-icons/fa";
import { GraduationCap, Menu } from "lucide-react";

const Header = ({ onMenuClick }) => {
  return (
    <header className="h-15 w-full bg-white shadow-md flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <button className="md:hidden text-blue-900" onClick={onMenuClick}>
          <Menu />
        </button>
        {/* Logo */}
        <GraduationCap className="h-8 w-8 text-blue-800 " />

        <span className="text-lg font-semibold text-blue-800 ">
          OJT E-Portfolio
        </span>
      </div>

      <div className="flex items-center gap-2">
        <a
          href="https://www.facebook.com/reinz.justine.dagang/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-blue-600 hover:text-blue-800"
        >
          <FaFacebook />
        </a>
        <a
          href="https://github.com/reinzjustinedagang"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-blue-800"
        >
          <FaGithub />
        </a>
      </div>
    </header>
  );
};

export default Header;
