import { useState } from "react";
import LegalModal from "./LegalModal"; // Import the LegalModal component
import "./Footer.css";

const Footer = () => {
  const [isLegalModalOpen, setLegalModalOpen] = useState(false);

  const openLegalModal = () => {
    setLegalModalOpen(true);
  };

  const closeLegalModal = () => {
    setLegalModalOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 footer-background px-12 py-4">
        <div className="text-sm text-center md:text-left">
          <ul>
            <li className="pb-2 md:pb-0">
              <a href="#">Back to Top</a>
            </li>
            <li className="pb-2 md:pb-0">
              <a href="#recent-work">Work</a>
            </li>
            <li className="pb-2 md:pb-0">
              <a href="#about-me">About Me</a>
            </li>
            <li>
              {/* Use onClick to open the legal modal */}
              <span onClick={openLegalModal} style={{ cursor: "pointer" }}>
                Privacy Policy & Legal
              </span>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-right py-4">
          <span>© emiliodiaz.ca {new Date().getFullYear()}</span>
        </div>
      </div>

      {/* Use LegalModal and pass isOpen and onClose props */}
      <LegalModal isOpen={isLegalModalOpen} onClose={closeLegalModal} />
    </>
  );
};

export default Footer;
