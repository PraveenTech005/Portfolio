import SkillCard from "../components/SkillCard";

const Skills = () => {
  const skills = [
    {
      title: "FrontEnd",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Vite",
        "Tailwind CSS",
        "Framer",
      ],
      color: 0,
    },
    {
      title: "BackEnd",
      skills: ["Node JS", "Express JS", "MongoDB", "JWT"],
      color: 1,
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Figma", "Illustrator"],
      color: 2,
    },
  ];

  const extra = [
    {
      title: "Programming Languages",
      skills: ["C", "Java", "Python", "Embedded C", "Micro Python", "Dart"],
      color: 3,
    },
    {
      title: "Internet of Things",
      skills: ["Arduino", "NodeMCU (ESP32/ESP8266)", "Raspberry Pi"],
      color: 4,
    },
    {
      title: "App Development",
      skills: ["Flutter", "React Native"],
      color: 5,
    },
  ];

  return (
    <div
      className="w-full min-h-screen flex flex-col text-white p-5 lg:p-16 space-y-5 pt-24 static-noise"
      id="skills"
    >
      <h1 className="text-xl">Skills</h1>
      <p className="text-[#ccc]">
        The tools and technologies I use to bring ideas to life
      </p>
      <SkillCard content={skills} />
      <div>
        <h1 className="py-3">I Also Know</h1>
        <SkillCard content={extra} />
      </div>
    </div>
  );
};

export default Skills;
