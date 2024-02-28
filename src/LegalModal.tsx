import React from "react";
import Modal from "react-modal";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const customStyles = {
  content: {
    border: "none",
  },
};

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Legal Information Modal"
    >
      <div className="border md:p-8">
        <div className="text-right">
          <button onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <h2 className="text-2xl">Privacy Policy</h2>
        <p>
          {" "}
          Thank you for visiting my portfolio website. Your privacy is
          important, and I want to assure you that any information you choose to
          share with me, including your email address, will be treated with
          utmost respect and confidentiality.{" "}
        </p>
        <p>
          <strong>Email Inquiries</strong>: If you choose to contact me via
          email at{" "}
          <a href="mailto:ediazdesigns@gmail.com">ediazdesigns@gmail.com</a>,
          rest assured that I will only use your email address to respond to
          your inquiries. I will not sell, share, or use your email for any
          other purpose without your explicit consent.{" "}
        </p>
        <p>
          <strong>Website Analytics</strong>: For the purpose of improving the
          user experience and understanding website traffic, I may use Google
          Analytics or similar analytics services in the future. These tools
          collect anonymous data about your visit, such as the pages you view
          and how long you stay on the site. This information is used solely for
          internal analytics and will not be shared with third parties.{" "}
        </p>
        <p>
          <strong>Third-Party Services</strong>: This website may utilize
          third-party services like Google Analytics. Your visit is purely for
          informational purposes, and no personally identifiable information is
          collected automatically.{" "}
        </p>
        <p>
          <strong>Cookies</strong>: If Google Analytics or similar tools are
          employed, cookies may be used to track your browsing behavior for
          analytics purposes. You can choose to disable cookies through your
          browser settings.
        </p>
        <p>
          {" "}
          If there are any updates or changes to the use of analytics tools,
          this privacy policy will be revised accordingly. If you have any
          concerns or questions regarding your privacy, feel free to reach out
          to me at the provided email address. Thank you for trusting me with
          your information. Best regards, Emilio Diaz.
        </p>

        <h2 className="text-2xl">Legal</h2>
        <p>
          LinkedIn, the LinkedIn logo, the IN logo and InMail are registered
          trademarks or trademarks of LinkedIn Corporation and its affiliates in
          the United States and/or other countries.
        </p>

        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default LegalModal;
