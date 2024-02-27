import "./App.css";
import Navbar from "./Navbar";
import PortfolioItem from "./PortfolioItem";
import ColourScheme from "./ColourScheme";
import FontsUsed from "./FontsUsed";
import { portfolioData } from "./data"; // Import the portfolioData
import AboutMe from "./AboutMe";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <section className="text-center pb-10 main-background">
        <div className="monster-font text-5xl md:text-8xl/[100px] pt-10">
          UI/UX Designer
          <br />& Developer
        </div>
        <p className="md:w-1/2 mx-auto md:py-10 px-10 md:px-2">
          Crafting seamless user experiences by merging front-end development
          expertise with a keen eye for UI design, ensuring both functionality
          and visual appeal work in harmony.
        </p>
      </section>
      <div className="container mx-auto px-10 md:px-0 border">
        <section id="recent-work" className="pb-10">
          <div className="monster-font text-5xl md:text-7xl/[100px] text-center py-8 md:py-20">
            Recent Work
          </div>
          {portfolioData.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
          <ColourScheme />
          <FontsUsed />
        </section>
      </div>
      <AboutMe />
      <Footer />
    </>
  );
}

export default App;
