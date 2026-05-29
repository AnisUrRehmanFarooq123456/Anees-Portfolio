const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "GitHub",
  "Responsive UI",
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <h2 className="text-4xl font-bold gradient-text text-center mb-16">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="glass rounded-3xl p-8 text-center card-hover"
            >
              <h3 className="font-semibold text-lg">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
