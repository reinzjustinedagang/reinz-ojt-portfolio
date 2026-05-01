export const Paragraph = ({
  children,
  align = "justify",
  textSize = "base",
  textColor = "blue-950",
  fontType = "regular",
}) => {
  return (
    <p
      className={`text-${textSize} font-${fontType} leading-7 text-${textColor} text-${align} mb-4 
      transition-all duration-300 ease-out 
      hover:text-blue-900 hover:translate-x-1`}
    >
      {children}
    </p>
  );
};

export const Card = ({ icon: Icon, title, content }) => {
  return (
    <div
      className="bg-transparent rounded-xl shadow-sm p-5 
      border border-gray-100 border-l-4 border-l-blue-900 
      hover:shadow-lg 
      transition-all duration-300 ease-out 
      hover:-translate-y-1"
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-5 h-5 text-blue-900" />
        <h3 className="text-left text-lg font-semibold text-blue-900">
          {title}
        </h3>
      </div>

      {/* Content */}
      <p className="text-sm text-gray-700 leading-relaxed text-left">
        {content}
      </p>
    </div>
  );
};

export const AppCard = ({ icon: Icon, name }) => {
  return (
    <div
      className="flex items-center gap-3 px-4 py-5 rounded-lg 
      hover:bg-blue-50 
      transition-all duration-300 ease-out 
      hover:translate-x-1"
    >
      <Icon className="h-5 w-5 text-blue-900" />
      <p className="text-blue-950">{name}</p>
    </div>
  );
};
