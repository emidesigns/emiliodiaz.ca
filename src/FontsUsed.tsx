const FontsUsed = () => {
  return (
    <>
      <h2 className="text-2xl font-medium text-center pt-10 pb-2">Fonts</h2>
      <p className="font-medium text-center">
        All fonts used in this project including the icons are from{" "}
        <a
          href="https://fonts.google.com/icons"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Google Fonts
        </a>{" "}
        and{" "}
        <a
          href="https://fonts.google.com/icons"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Google Material Symbols
        </a>
        .
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        <div>
          <div className="border p-20 text-center">
            <span className="text-5xl bungee-demo">Bungee</span>
          </div>
          <p className="text-center text-sm">
            Headings: <strong>Bungee</strong> – Designed by{" "}
            <a
              href="https://fonts.google.com/?query=David%20Jonathan%20Ross"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              David Jonathan Ross
            </a>
          </p>
        </div>
        <div>
          <div className="border p-20 text-center">
            <span className="text-5xl inter-demo">Inter</span>
          </div>
          <p className="text-center text-sm">
            Other content: <strong>Inter</strong> – Designed by{" "}
            <a
              href="https://fonts.google.com/?query=Rasmus%20Andersson"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Rasmus Andersson
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default FontsUsed;
