import React, { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { SiGmail } from "react-icons/si";
import Resume from "../assets/Praveen.pdf";

const Hero = () => {
  const resumeRef = useRef();
  return (
    <div
      className="w-full min-h-screen bg-[url('/src/assets/img/bg-p.jpg')] lg:bg-[url('/src/assets/img/bg.jpg')] bg-cover bg-center bg-no-repeat z-0 flex flex-row justify-evenly lg:justify-between text-white"
      id="home"
    >
      <div className="w-full lg:w-6/12 flex flex-row justify-end p-5">
        <div className="flex flex-col space-y-5 w-full lg:w-7/12 justify-center">
          <div className="space-y-2">
            <p className="text-xl">Hello 👋,</p>
            <h1 className="text-3xl">
              I'm <span className="Unbounded uppercase">Praveen</span>
            </h1>
          </div>
          <h2 className="text-sm">
            Web Developer & Mobile Application Developer
          </h2>
          <p>
            Passionate about creating beautiful, functional websites and
            applications that deliver exceptional user experiences.
          </p>
          <div className="flex flex-row space-x-1">
            <a href="https://github.com/PraveenTech005" target="_blank">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/praveentech005" target="_blank">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:praveentech005@gmail.com" target="_blank">
              <SiGmail size={20} />
            </a>
          </div>
          <div className="space-x-5 flex">
            <button className="border border-transparent exce">
              <a href="#projects">View Projects →</a>
            </button>
            <a href={Resume} className="hidden" download ref={resumeRef}>
              <LuDownload size={15} /> <p>Resume</p>
            </a>
            <button
              className="flex flex-row space-x-2 justify-evenly items-center b2"
              onClick={() => resumeRef.current.click()}
            >
              <LuDownload size={15} /> <p>Resume</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
