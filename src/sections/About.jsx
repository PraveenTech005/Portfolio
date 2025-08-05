import React from "react";

const About = () => {
  const data = [
    {
      title: "Name",
      value: "Praveen. M",
    },
    {
      title: "Role",
      value: "Full Stack Developer",
    },
    {
      title: "Location",
      value: "Tuticorin, India",
    },
    {
      title: "Age",
      value: "20",
    },
    {
      title: "Email",
      value: "PraveenTech005@gmail.com",
    },
    {
      title: "Phone",
      value: "+91-97900 77037",
    },
  ];
  return (
    <div
      className="w-full min-h-screen flex flex-col text-white p-5 lg:p-16 space-y-5 pt-24 subtle-noise"
      id="about"
    >
      <h1 className="text-xl">About Me</h1>
      <p className="text-[#ccc]">
        Bringing ideas to life through clean code and creative design
      </p>
      <div className="flex-1 flex flex-col lg:flex-row justify-evenly items-center space-y-10 lg:space-y-0">
        <div className="w-11/12 lg:w-1/4 flex flex-col space-y-5 p-3 justify-center items-center blurc">
          <img
            src="/img/Praveen.jpg"
            alt="Praveen"
            className="w-40 h-40 border-2 rounded-full"
          />
          <div className="w-full flex flex-col space-y-2">
            {data.map((item, index) => (
              <div key={index} className="flex flex-row justify-evenly">
                <h1 className="w-3/12">{item.title}</h1> <h1>:</h1>
                <p className="w-8/12">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-11/12 lg:w-5/12 flex flex-col space-y-5 justify-evenly items-center">
          <div className="flex flex-col w-full text-justify lg:w-4/5 space-y-3 blurc p-5">
            <p className="indent-5">
              Hi! I'm Praveen, a passionate{" "}
              <span className="Sora text-red-500">
                Full Stack Web & App Developer
              </span>{" "}
              based in India 🇮🇳.
            </p>
            <p className="indent-5">
              With a strong foundation in both frontend and backend
              technologies, I build fast, responsive, and scalable applications.
            </p>
            <p className="indent-5">
              I specialize in the{" "}
              <span className="Sora text-red-500">
                MERN stack (MongoDB, Express.js, React.js, Node.js)
              </span>{" "}
              and also love working with tools like{" "}
              <span className="Sora text-red-500">Tailwind CSS</span>, and{" "}
              <span className="Sora text-red-500">Vite</span> for
              high-performance apps. So, I often call it as{" "}
              <span className="Sora text-red-500">MERNT Stack</span> 😅. Whether
              it's a sleek React website or a cross-platform mobile app with{" "}
              <span className="Sora text-red-500">React Native</span>, I enjoy
              turning ideas into reality through clean and efficient code.
            </p>
            <p className="indent-5">
              I'm a self-learner, tech enthusiast, and always exploring new
              tools to stay updated in the dev world.
            </p>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-3 gap-2">
            {[
              "React",
              "Node JS",
              "Express JS",
              "MondoDB",
              "Vite",
              "TailwindCSS",
            ].map((item, index) => (
              <h3
                key={index}
                className="bg-[#303030] p-2 px-3 rounded-full text-center border border-[#303030] hover:border-[#00ffff] hover:shadow-lg hover:bg-[#151515] cursor-pointer trans flex flex-row justify-center items-center"
              >
                {item}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
