import LinkedInLogo from "./assets/images/LI-In-Bug.png";

const AboutMe = () => {
  return (
    <>
      <section id="about-me" className="mx-auto bg-[#eeeeee] pb-20">
        <h2 className="text-5xl md:text-7xl/[100px] monster-font text-center pt-20 py-10">
          About me
        </h2>
        <div className="lg:w-2/3 mx-auto px-10 md:px-12 text-center pb-10">
          <p>
            I'm Emilio, a creative professional dedicated to crafting engaging
            digital experiences. With a background in UI/UX design and
            development, I enjoy bringing ideas to life and creating seamless
            user interfaces.
          </p>
          <p>
            Whether diving into design sprints or conquering enterprise-level
            front-end challenges, I'm all about making the web a more
            captivating and accessible place.
          </p>
        </div>

        <div className="lg:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-10 md:px-12 pt-10">
          <div>
            <h2 className="text-2xl monster-font pb-5">Experience</h2>
            <ul>
              <li className="pb-2">
                <strong>Freelance UI/UX Designer & UI Developer</strong> @
                emiliodiaz.ca
                <br />
                <span className="text-sm">2007 - Present</span>
              </li>
              <li className="pb-2">
                <strong>Front End Developer</strong> @ Capital One Canada
                <br />
                <span className="text-sm">2016 - Present</span>
              </li>
              <li className="pb-2">
                <strong>Digital Designer</strong> @ Capital One Canada
                <br />
                <span className="text-sm">2012 - 2016</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl monster-font pb-5">Software & Tools</h2>

            <ul>
              <li>Fimga</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>VS Code</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Vite</li>
              <li>JavaScript</li>
              <li>Wordpress</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl monster-font">Contact</h2>
            <p>
              Keep in touch!{" "}
              <a href="mailto:ediazdesigns@gmail.com" className="underline">
                ediazdesigns@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/emilio-diaz-53b06716"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LinkedInLogo}
                  alt="LinkedIn Logo - Connect with me on LinkedIn"
                  width="30"
                  height="30"
                  className="pt-2"
                />
              </a>
            </p>
          </div>
        </div>
        <div className="lg:w-2/3 mx-auto px-10 md:px-12 text-center md:text-left">
          <h2 className="text-5xl monster-font text-center pt-20">
            How I work
          </h2>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
            <div className="text-sm">
              <h2 className="text-xl monster-font">
                1. Research and Discovery:
              </h2>{" "}
              <p>
                I kick off projects with extensive research, examining the
                target audience, business goals, and industry trends.
              </p>
            </div>
            <div className="text-sm">
              <h2 className="text-xl monster-font">2. Conceptualization:</h2>{" "}
              <p>
                I distill research into user personas, identifying pain points
                and motivations. Then, through ideation and collaboration with
                stakeholders, I align design solutions with project objectives.
              </p>
            </div>
            <div className="text-sm">
              <h2 className="text-xl monster-font">
                3. Information Architecture & Wireframing:
              </h2>{" "}
              <p>
                I organize content with logical information architecture, craft
                interface frameworks through wireframing, and iterate based on
                stakeholder feedback.
              </p>
            </div>
            <div className="text-sm">
              <h2 className="text-xl monster-font">4. Prototyping:</h2>{" "}
              <p>
                I create interactive prototypes in Figma, conduct usability
                testing for feedback, and iterate based on user insights to
                refine the design.
              </p>
            </div>
            <div className="text-sm">
              <h2 className="text-xl monster-font">5. Visual Design:</h2>{" "}
              <p>
                I apply visual elements for UI enhancement, ensuring consistency
                with brand guidelines. Collaborating with stakeholders, I align
                visual design with project goals.
              </p>
            </div>
            <div className="text-sm">
              <h2 className="text-xl monster-font">6. Development:</h2>{" "}
              <p>
                Start developing finalized designs, using specifications to
                produce assets for seamless implementation, and promptly address
                any design-related issues during development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
