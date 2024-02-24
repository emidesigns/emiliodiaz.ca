import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="p-4 px-10 md:px-0 text-black">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-regular">Emilio Diaz</h2>
          <div className="flex space-x-4">
            <a href="#" className="nav-link text-md font-regular">Work</a>
            <a href="#" className="nav-link text-md font-regular">About</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
