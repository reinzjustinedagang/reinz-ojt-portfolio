export const Paragraph = ({
  children,
  align = "justify",
  textSize = "base",
  textColor = "gray-700",
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
