import { HashLink } from "react-router-hash-link";

export const TopChapter = ({ title, to }) => {
  return (
    <HashLink
      smooth
      to={to}
      className="block group transition-all duration-300"
    >
      <div className="flex items-end gap-3 cursor-pointer group-hover:pl-2 transition-all duration-300">
        <p className="text-lg font-semibold text-blue-950 whitespace-nowrap group-hover:text-blue-900 transition-colors duration-300">
          {title}
        </p>

        <div className="flex-1 border-b-2 border-dotted border-gray-400"></div>
      </div>
    </HashLink>
  );
};

export const SubChapter = ({ title, to }) => {
  return (
    <HashLink
      smooth
      to={to}
      className="block pl-6 group transition-all duration-300"
    >
      <div className="flex items-end gap-3 cursor-pointer group-hover:pl-2 transition-all duration-300">
        <p className="text-base font-regular text-blue-950 whitespace-nowrap group-hover:text-blue-900 transition-colors duration-300">
          {title}
        </p>

        <div className="flex-1 border-b border-dotted border-gray-400"></div>
      </div>
    </HashLink>
  );
};
