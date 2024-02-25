import "./App.css";
import Navbar from "./Navbar";
import PortfolioItem from "./PortfolioItem";
import ColourScheme from "./ColourScheme";
import FontsUsed from "./FontsUsed";
import { portfolioData } from "./data"; // Import the portfolioData
import LinkedInLogo from "./assets/images/LI-In-Bug.png";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-10 md:px-0">
        <section className="text-center pb-10">
          <div className="monster-font text-5xl md:text-8xl/[100px] pt-10">
            UI/UX Designer
            <br />& Developer
          </div>
          <div className="md:w-1/2 mx-auto md:py-10">
            <p>
              Crafting seamless user experiences by merging front-end
              development expertise with a keen eye for UI design, ensuring both
              functionality and visual appeal work in harmony.
            </p>
          </div>
        </section>
        <section id="recent-work" className="pb-10">
          <div className="monster-font text-5xl md:text-7xl/[100px] text-center py-4 md:py-10">
            Recent Work
          </div>
          {portfolioData.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
          <ColourScheme />
          <FontsUsed />
        </section>
        <section id="about-me" className="mx-auto md:w-1/2 text-center py-10">
          <div className="text-5xl monster-font">About</div>
          <p>
            Hello! I'm Emilio, a creative professional dedicated to crafting
            engaging digital experiences. With a background in UI/UX design and
            development, I enjoy bringing ideas to life and creating seamless
            user interfaces. Proficient in tools such as <strong>Figma</strong>,{" "}
            <strong>React</strong>, <strong>Tailwind</strong>,
            <strong>WordPress</strong>, and <strong>JavaScript</strong>, my
            focus is on delivering thoughtful and high-quality digital
            solutions.{" "}
          </p>
          <p>
            Whether diving into design sprints or conquering enterprise-level
            front-end challenges, I'm all about making the web a more
            captivating and accessible place. Let's create something
            extraordinary together!
          </p>
          <p>
            Keep in touch.{" "}
            <a href="mailto:ediazdesigns@gmail.com" className="underline">
              ediazdesigns@gmail.com
            </a>
            <a
              href="www.linkedin.com/in/emilio-diaz-53b06716"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={LinkedInLogo}
                alt="LinkedIn Logo - Connect with me on LinkedIn"
                width="30"
                height="30"
                className="mx-auto pt-2"
              />
            </a>
          </p>
        </section>
      </div>
    </>
  );
}

export default App;
