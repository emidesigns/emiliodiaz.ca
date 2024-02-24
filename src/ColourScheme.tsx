import ColourDot from "./ColourDot";

const ColourScheme = () => {
  // Array of color values
  const colorDotData = [
    {
      name: "Light Blue",
      hex: "#0031AB",
      color: "#0031AB",
    },
    {
      name: "Yellow",
      hex: "#FFFF00",
      color: "#FFFF00",
    },
    {
      name: "Drak Grey",
      hex: "#111827",
      color: "#111827",
    },
    {
      name: "Black",
      hex: "#000000",
      color: "#000000",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-4 md:py-10">
        {colorDotData.map((color, index) => (
          <ColourDot
            key={index}
            backgroundColor={color.color}
            name={color.name}
            hex={color.hex}
          />
        ))}
      </div>
    </>
  );
};

export default ColourScheme;
