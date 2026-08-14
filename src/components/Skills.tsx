const skills = [
  { name: "React.js", color: "#61dafb" },
  { name: "Next.js", color: "#e6edf3" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "JavaScript", color: "#f2b544" },
  { name: "Node.js", color: "#7ee08a" },
  { name: "Express.js", color: "#8b93a1" },
  { name: "MongoDB", color: "#4dbb6b" },
  { name: "Tailwind CSS", color: "#34d8c4" },
  { name: "HTML5", color: "#fb7185" },
  { name: "CSS3", color: "#5b8def" },
  { name: "Bootstrap", color: "#b48cf2" },
  { name: "GitHub", color: "#e6edf3" },
  { name: "Responsive UI", color: "#f2b544" },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-width text-center">
        <span className="section-eyebrow" style={{ fontSize: "3rem" }}>
          Tech Stack
        </span>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="glass rounded-2xl p-6 card-hover flex items-center gap-3"
            >
              <span
                className="lang-dot"
                style={{ background: skill.color }}
                aria-hidden="true"
              />
              <h3 className="font-mono font-medium text-[15px]">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
