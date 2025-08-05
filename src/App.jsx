import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <div className="relative w-full min-h-screen text-sm lg:text-xs">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ToastContainer />
      <div className="bg-black p-2 text-white">
        <h1 className="exce m-auto text-center">
          © 2025 Praveen M. All rights reserved. Designed & Developed by
          <a href="https://github.com/PraveenTech005" className="text-cyan-500">
            Praveen.
          </a>
        </h1>
      </div>
    </div>
  );
};

export default App;
