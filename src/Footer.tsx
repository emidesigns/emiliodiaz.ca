import { useState } from 'react';
import LegalModal from './LegalModal'; // Import the LegalModal component
import './Footer.css';

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
            <li>
              {/* Use onClick to open the legal modal */}
              <span onClick={openLegalModal} style={{ cursor: 'pointer' }}>
                Privacy Policy
              </span>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-right">
            <span className="text-right text-lg font-bold">Emilio Diaz</span> <br />
            <span className="monster-font text-sm">Designer & Developer</span> <br />
            <span className="text-xs">© emiliodiaz.ca {new Date().getFullYear()}</span>
          </p>
        </div>
      </div>

      {/* Use LegalModal and pass isOpen and onClose props */}
      <LegalModal isOpen={isLegalModalOpen} onClose={closeLegalModal} />
    </>
  );
};

export default Footer;
