const projects = [
  {
    title: "LearnTube",
    description:
      "LearnTube is an e-learning platform built with Next.js and TypeScript for exploring categorized courses and curated educational playlists in a clean, responsive interface.",
    tech: "NEXT JS + TypeScript",
    link: "learntube-project.vercel.app",
  },

  {
    title: "Helplytics AI",
    description:
      "React authentication application with local storage, login/signup and modern UI.",
    tech: "React • JavaScript • CSS",
    link: "https://github.com/AnisUrRehmanFarooq123456/Helplytics-AI",
  },

  {
    title: "Weather App",
    description:
      "Weather application using external API with real-time weather information.",
    tech: "HTML • CSS • JavaScript",
    link: "https://anisurrehmanfarooq123456.github.io/AS-Weather-App/",
  },

  {
    title: "Digital Clock",
    description:
      "Live digital utility application with clock, date and stopwatch features.",
    tech: "HTML • CSS • JavaScript",
    link: "https://anisurrehmanfarooq123456.github.io/AS-Digital-Clock/",
  },

  {
    title: "Food Website",
    description:
      "Food website using external API with dynamic data rendering and UI.",
    tech: "HTML • CSS • JavaScript",
    link: "https://anisurrehmanfarooq123456.github.io/AS-Food-Website/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        <h2 className="text-4xl font-bold gradient-text text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass rounded-3xl p-8 card-hover"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 mb-8"></div>

              <h3 className="text-3xl font-bold mb-6">{project.title}</h3>

              <p className="text-gray-400 leading-8 mb-6">
                {project.description}
              </p>

              <p className="text-blue-400 mb-8">{project.tech}</p>

              <a
                href={project.link}
                target="_blank"
                className="primary-btn inline-block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
