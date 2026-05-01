export const Paragraph = ({
  children,
  align = "justify",
  textSize = "base",
  textColor = "blue-950",
  fontType = "regular",
}) => {
  const alignMap = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
    justify: "text-justify",
  };

  const sizeMap = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const fontMap = {
    regular: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
  };

  return (
    <p
      className={`
        ${sizeMap[textSize]}
        ${fontMap[fontType]}
        leading-7
        text-${textColor}
        ${alignMap[align]}
        mb-4
        transition-all duration-300 ease-out
        hover:text-blue-900 hover:translate-x-1
      `}
    >
      {children}
    </p>
  );
};

const iconSizeMap = {
  sm: "w-4 h-4",
  base: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-7 h-7",
};

export const Card = ({
  icon: Icon,
  title,
  content,
  pSize = "sm",
  h3Size = "lg",
  iconSize = "base",
  border = "l",
}) => {
  const borderMap = {
    l: "border-l-4 border-l-blue-900",
    t: "border-t-4 border-t-blue-900",
    r: "border-r-4 border-r-blue-900",
    b: "border-b-4 border-b-blue-900",
  };

  const sizeMap = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
  };

  return (
    <div
      className={`bg-transparent rounded-xl shadow-sm p-5 border border-gray-100
      ${borderMap[border]} 
      hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1`}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`${iconSizeMap[iconSize]} text-blue-900`} />
        <h3 className={`${sizeMap[h3Size]} font-semibold text-blue-900`}>
          {title}
        </h3>
      </div>

      <p className={`${sizeMap[pSize]} text-gray-700 leading-relaxed`}>
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
