import React from "react";

interface ColourDotProps {
  name: string;
  hex: string;
  backgroundColor?: string;
}

const ColourDot: React.FC<ColourDotProps> = ({ backgroundColor, name, hex }) => {
  const circleStyle = {
    backgroundColor: backgroundColor || "#ffffff", // Default color if not provided
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-medium">{name}</h2>
      <div style={circleStyle}></div>
      <p>{hex}</p>
    </div>
  );
};

export default ColourDot;
