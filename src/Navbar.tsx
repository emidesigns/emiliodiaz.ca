import "./Navbar.css";

const Navbar = () => {
  return (
    <nav role="navigation" className="p-4 px-10 md:px-0 text-black bg-white sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" aria-label="Home">
            <h2 className="text-lg font-bold">
              Emilio Diaz{" "}
              <span className="font-thin">| {new Date().getFullYear()}</span>
            </h2>
          </a>
          <div className="flex space-x-4">
            <a href="#recent-work" className="nav-link text-md font-regular">
              Work
            </a>
            <a href="#about-me" className="nav-link text-md font-regular">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
