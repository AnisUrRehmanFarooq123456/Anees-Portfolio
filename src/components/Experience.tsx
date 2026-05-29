const experiences = [
  {
    role: "Accountant",
    company: "Embroideries",
    duration: "2025 - Present",
  },

  {
    role: "Data Entry Operator",
    company: "Liberty Mills Limited",
    duration: "2025",
  },

  {
    role: "Teacher",
    company: "SS Programmer School",
    duration: "2024 - 2025",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <h2 className="text-4xl font-bold gradient-text text-center mb-16">
          Experience
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((item) => (
            <div key={item.role} className="glass rounded-3xl p-8 card-hover">
              <h3 className="text-2xl font-bold mb-4">{item.role}</h3>

              <p className="text-blue-400 mb-4">{item.company}</p>

              <p className="text-gray-400">{item.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;
