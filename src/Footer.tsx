import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-2 footer-background px-12">
        <div className="pt-4 text-sm">
          <ul>
            <li>
              <a href="#">Back to Top</a>
            </li>
            <li>
              <a href="#recent-work">Work</a>
            </li>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>Legal</li>
          </ul>
        </div>
        <div>
          <p className="text-right">
            <span className="text-right text-lg font-bold">Emilio Diaz</span>{" "}
            <br />
            <span className="monster-font text-sm">Designer & Developer</span>
            <br />
            <span className="text-xs">
              © emiliodiaz.ca {new Date().getFullYear()}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
