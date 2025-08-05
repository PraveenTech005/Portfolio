import React, { useEffect, useState } from "react";
import { AiOutlineSwapRight } from "react-icons/ai";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { LuChevronDown, LuChevronUp, LuDownload } from "react-icons/lu";
import ProjectModal from "../components/ProjectModal";
import { MdClose } from "react-icons/md";

const Projects = () => {
  const project = [
    {
      title: "OLMS",
      description:
        "OLMS was my first attempt at building a full-stack web application during my internship. The goal was to create an online platform where students could access courses, track progress, and interact with instructors. I worked on both frontend and backend development, gaining hands-on experience with user authentication, course management, and database integration. Although the project was only partially completed, it gave me a solid foundation in full-stack development and team collaboration.",
      type: "Full Stack Web App",
      var: 0,
      image: "/src/assets/img/projects/olms.png",
      date: "July 2025",
      url: "https://github.com/PraveenTech005/OLMS",
    },
    {
      title: "Custom bot",
      description:
        "Custombot is an AI chatbot that dynamically adapts to any website’s content. By inputting a site URL, the bot scrapes the site's data and uses it as the knowledge base to answer user questions contextually. It leverages the language model via the Groq API to provide fast, accurate, and relevant responses. This project showcases my ability to integrate real-time web scraping, natural language processing, and third-party AI APIs to build intelligent user-facing tools.",
      type: "AI / Web App",
      var: 1,
      image: "/src/assets/img/projects/chatbot.png",
      date: "June 2025",
      url: "https://github.com/PraveenTech005/Custombot",
    },
    {
      title: "BG-Styles",
      description:
        "BG-styles is a simple, lightweight project featuring a collection of reusable background design templates built for HTML and CSS. It provides a visual gallery of styled cards showcasing different background patterns and effects. When a user clicks on any card, a pop-up displays the corresponding HTML, CSS, and container code—ready to copy and paste into their own UI. This project was aimed at speeding up UI development by offering quick access to aesthetic, copyable background snippets.",
      type: "Frontend Utility / UI Tool",
      var: 0,
      image: "/src/assets/img/projects/bg-styles.png",
      date: "June 2025",
      live: "https://bg-styles.vercel.app",
      url: "https://github.com/PraveenTech005/bg-styles",
    },
    {
      title: "Pixelog",
      description:
        "Pixelog is a professional portfolio website I developed for a client running a creative agency specializing in advertising and digital services. The site showcases their core offerings, including digital marketing, web development, branding, and design. Built with a focus on clean visuals and smooth navigation, the website helps establish the agency’s online presence while reflecting their creative identity. This project allowed me to collaborate closely with the client to understand their vision and translate it into a responsive and visually compelling web experience.",
      type: "Client Project / Web Portfolio",
      var: 0,
      image: "/src/assets/img/projects/pixelog.png",
      date: "May 2025",
      live: "https://pixelog.vercel.app",
      url: "https://github.com/PraveenTech005/Pixelog",
    },
    {
      title: "Taskify",
      description:
        "Taskify is a mobile application I developed during my internship using Flutter. The app allows users to create, organize, and manage their daily tasks efficiently through a clean and user-friendly interface. Key features include task creation, status tracking, and task categorization. This project helped me strengthen my understanding of mobile app development, Flutter widgets, and state management, while also applying practical design principles to enhance the user experience.",
      type: "Mobile App",
      var: 2,
      image: "/src/assets/img/projects/taskify.png",
      date: "March 2025",
      url: "https://github.com/PraveenTech005/Taskify",
    },
    {
      title: "KrishnaMines",
      description:
        "KrishnaMines was my first real-world web development project, where I was given the opportunity to build the frontend of a corporate website through a referral from my Head of Department. The site was developed to represent the company's profile, services, and contact information with a clean and structured layout. This project marked my entry into practical frontend development, helping me understand the importance of responsive design, real client requirements, and production-ready code.",
      type: "Frontend Web Project",
      var: 0,
      image: "/src/assets/img/projects/krishnamines.png",
      date: "October 2024",
      live: "http://krishnamines.com",
      url: "https://github.com/PraveenTech005/KrishnaMines",
    },
    {
      title: "NM-SWMS",
      description:
        "NM-SWMS is an IoT-based Smart Waste Management System developed as part of the Naan Mudhalvan initiative. Using Wokwi for simulation, I created a virtual environment where sensors monitor the fill level of waste bins. The sensor data is updated in real-time to the ThingSpeak IoT platform, enabling live monitoring and analytics. I also built a React-based web dashboard to visually display the sensor readings, helping users track waste levels and optimize collection schedules. This project combines IoT, real-time data communication, and frontend development to offer a scalable smart city solution.",
      type: "IoT Project / Web Dashboard",
      var: 3,
      image: "src/assets/img/projects/nm-swms.png",
      date: "May 2024",
      url: "https://github.com/PraveenTech005/NM-SWMS",
    },
    {
      title: "An IoT Based Wifi Connected Car-Controlling System",
      description:
        "This project was developed as my final-year diploma (D.EEE) project, combining IoT and health monitoring for intelligent vehicle control and emergency response. The system is a Wi-Fi-controlled smart car prototype equipped with health sensors to monitor the passenger’s heart rate via a wristband. When the BPM drops below a threshold (e.g., indicating a possible stroke), the system automatically captures the live location using an A9G development board and sends alerts via SMS to pre-configured contacts such as relatives and nearby hospitals.",
      type: "IoT / Embedded System Project",
      var: 3,
      image: "src/assets/img/projects/WiFi-car.jpg",
      date: "April 2023",
      pdf: "/src/assets/WiFi-car.pdf",
    },
  ];

  const [projectShow, setProjectShow] = useState(4);
  const [showModal, setShowModal] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  useEffect(() => {
    const disableScroll = () => {
      if (showModal) document.documentElement.style.overflow = "hidden";
      else document.documentElement.style.overflow = "auto";
    };

    disableScroll();
  }, [showModal]);
  return (
    <div
      className="relative w-full min-h-screen flex flex-col text-white p-5 lg:p-16 space-y-5 pt-24 subtle-noise"
      id="projects"
    >
      <h1 className="text-xl">Projects</h1>
      <p className="text-[#ccc]">
        A showcase of my recent work and creative solutions
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 ">
        {project.slice(0, projectShow).map((item, index) => (
          <div
            key={index}
            className="border border-[#555] w-10/12 lg:w-full mx-auto rounded-xl p-3 space-y-3 flex flex-col bg-[#121212] cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-46 lg:h-36 rounded-md"
            />
            <div className="space-y-1">
              <h1 className="text-lg">{item.title}</h1>
              <p className="text-[10px] text-[#aaa] font-bold">{item.date}</p>
            </div>
            <p className="line-clamp-4 px-2 leading-5 text-xs text-justify">
              {item.description}
            </p>
            <div className="flex-1 flex flex-col justify-between space-y-3 ">
              <p
                className={`${
                  item.var === 0
                    ? "text-blue-600"
                    : item.var === 1
                    ? "text-red-700"
                    : item.var === 2
                    ? "text-green-700"
                    : "text-yellow-700"
                } text-[10px] font-bold flex flex-row space-x-2 bg-white items-center border rounded-full p-0.5 px-2 mr-auto`}
              >
                <AiOutlineSwapRight size={15} />
                <span>{item.type}</span>
              </p>
              {item.live && (
                <p className="exc">
                  Live at
                  <a
                    href={item.live}
                    className="text-[#00ffff]"
                    target="_blank"
                  >
                    {item.live}
                  </a>
                </p>
              )}
              <div className="flex flex-row justify-evenly items-center">
                <button
                  onClick={() => {
                    setModalProject(item);
                    setShowModal(true);
                  }}
                  className="b2 flex flex-row justify-center items-center space-x-2"
                >
                  <span>View</span> <FaArrowRight />
                </button>
                {item.url && (
                  <button className="exce border">
                    <a
                      href={item.url}
                      target="_blank"
                      className="line-clamp-1 flex flex-row justify-center items-center space-x-2 font-bold"
                    >
                      <FaGithub size={20} />
                      <span>Github Repo</span>
                    </a>
                  </button>
                )}
                {item.pdf && (
                  <button className="exce border">
                    <a
                      href={item.pdf}
                      download
                      className="line-clamp-1 flex flex-row justify-center items-center space-x-2 font-bold"
                    >
                      <LuDownload size={15} />
                      <span>Download</span>
                    </a>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {projectShow < project.length ? (
        <button
          className="flex justify-evenly items-center space-x-2 mx-auto b2"
          onClick={() => setProjectShow(project.length)}
        >
          <span>Show More</span> <LuChevronDown />
        </button>
      ) : (
        <button
          className="flex justify-evenly items-center space-x-2 mx-auto b2"
          onClick={() => setProjectShow(4)}
        >
          <span>Show Less</span> <LuChevronUp />
        </button>
      )}
      {showModal && (
        <div className="top-0 left-0 w-full h-screen fixed z-20 flex flex-row justify-center items-center ">
          <div
            className="absolute top-0 left-0 w-full h-screen bg-[#000000ca]"
            onClick={() => setShowModal(false)}
          >
            <p className="absolute top-5 right-5 bg-black rounded-full p-2 border">
              <MdClose size={25} />
            </p>
          </div>
          <ProjectModal item={modalProject} />
        </div>
      )}
    </div>
  );
};

export default Projects;
