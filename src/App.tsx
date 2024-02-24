import "./App.css";
import Navbar from "./Navbar";
import PortfolioItem from "./PortfolioItem";
import ColourScheme from "./ColourScheme";
import { portfolioData } from "./data"; // Import the portfolioData

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
          <div className="w-full md:w-1/2 mx-auto md:py-10">
            <p>
              Crafting seamless user experiences by merging front-end
              development expertise with a keen eye for UI design, ensuring both
              functionality and visual appeal work nicely together.
            </p>
          </div>
        </section>
        <section className="pb-10">
          <div className="monster-font text-5xl md:text-7xl/[100px] text-center py-4 md:py-10">Recent Work</div>
          {portfolioData.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
          <ColourScheme />
        </section>
        <section className="text-center py-10">
          <div className="text-5xl monster-font">About</div>
          <p>
            I'm Emilio, the creative force behind the pixels! I'm not just a
            UI/UX Designer and Developer; I'm your go-to person for transforming
            ideas into digital wonders. Armed with <strong>Figma</strong>,{" "}
            <strong>React</strong>, <strong>Tailwind</strong>,{" "}
            <strong>WordPress</strong>, and <strong>JavaScript</strong>, I craft
            seamless and well-performing user experiences.
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
          </p>
        </section>
      </div>
    </>
  );
}

export default App;
