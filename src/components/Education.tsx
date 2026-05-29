const education = [
  {
    title: "Software Engineering",
    institute: "University Of Karachi",
  },

  {
    title: "Intermediate",
    institute: "PECHS Education Foundation College",
  },

  {
    title: "Matric",
    institute: "Info English Grammar School",
  },

  {
    title: "MERN Stack Development",
    institute: "Saylani Mass IT Training",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container-width">
        <h2 className="text-4xl font-bold gradient-text text-center mb-16">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item) => (
            <div key={item.title} className="glass rounded-3xl p-8 card-hover">
              <h3 className="text-2xl font-bold mb-5">{item.title}</h3>

              <p className="text-blue-400">{item.institute}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Education;
