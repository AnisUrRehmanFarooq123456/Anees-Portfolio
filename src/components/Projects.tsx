const hackathonProjects = [
  {
    title: "MaintainAI",
    description:
      "Built a full-stack asset management system with user authentication and real-time asset tracking. Designed a responsive React/Next.js UI and a RESTful API layer connecting the frontend to MongoDB, developed during a hackathon under time constraints while coordinating scope and features with a team.",
    tech: "Next.js + Node.js + Express.js + MongoDB",
    link: "https://maintain-ai-frontend-8crj.vercel.app/",
    dot: "var(--rose)",
  },
  {
    title: "Helplytics AI",
    description:
      "Developed a responsive web application using React with user authentication features including login and signup. Implemented local storage for managing user data and session handling, along with sample data for demonstration purposes. Designed a clean, responsive and user-friendly interface using modern frontend technologies such as React, JavaScript, HTML and CSS.",
    tech: "React + JavaScript + HTML + CSS",
    link: "https://helplytics-ai-opal.vercel.app",
    dot: "var(--amber)",
  },
];

const nextProjects = [
  {
    title: "TechSolution",
    description:
      "A modern and responsive e-learning platform built with HTML, CSS, JavaScript, TypeScript, React, and Next.js, providing web development courses and interactive learning experiences with a clean and user-friendly interface.",
    tech: "Next.js + TypeScript",
    link: "https://tech-solution-psi.vercel.app/",
    dot: "var(--teal)",
  },
  {
    title: "LearnTube",
    description:
      "LearnTube is an e-learning platform built with Next.js and TypeScript for exploring categorized courses and curated educational playlists in a clean, responsive interface.",
    tech: "Next.js + TypeScript",
    link: "https://learntube-project.vercel.app/",
    dot: "var(--violet)",
  },
];

const practiceProjects = [
  {
    title: "Weather App",
    description:
      "Weather application using an external API with real-time weather information.",
    tech: "HTML + CSS + JavaScript",
    link: "https://anisurrehmanfarooq123456.github.io/AS-Weather-App/",
    dot: "var(--teal)",
  },
  {
    title: "Digital Clock",
    description:
      "Live digital utility application with clock, date and stopwatch features.",
    tech: "HTML + CSS + JavaScript",
    link: "https://anisurrehmanfarooq123456.github.io/AS-Digital-Clock/",
    dot: "var(--amber)",
  },
  {
    title: "Food Website",
    description:
      "Food website using an external API with dynamic data rendering and UI.",
    tech: "HTML + CSS + JavaScript",
    link: "https://anisurrehmanfarooq123456.github.io/AS-Food-Website/",
    dot: "var(--rose)",
  },
];

type Project = {
  title: string;
  description: string;
  tech: string;
  link: string;
  dot: string;
};

const ProjectCard = ({
  project,
}: {
  project: Project;
  hackathon?: boolean;
}) => {
  const hasLink = project.link.trim().length > 0;

  return (
    <div className="glass repo-card card-hover">
      <div className="flex items-center gap-3 mb-5 justify-center align-center">
        <span
          className="lang-dot"
          style={{ background: project.dot }}
          aria-hidden="true"
        />
      </div>

      <h4 className="font-display text-2xl font-bold mb-3">{project.title}</h4>

      <p className="text-[color:var(--text-muted)] leading-8 mb-6">
        {project.description}
      </p>

      <p className="tech-chip font-mono mb-7">{project.tech}</p>

      {hasLink ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="primary-btn inline-block"
        >
          View Project
        </a>
      ) : (
        <span
          className="primary-btn project-btn inline-block"
          aria-disabled="true"
          title="Not publicly hosted — built for a private hackathon team"
        >
          Private Project
        </span>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-width text-center">
        <span className="section-eyebrow" style={{ fontSize: "3rem" }}>
          Featured Projects
        </span>

        {/* ---------- Hackathon Projects ---------- */}
        <div className="mb-16">
          <h3 className="font-mono text-2xl uppercase tracking-wide text-[color:var(--amber)] mb-6">
            Hackathon Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {hackathonProjects.map((project) => (
              <ProjectCard key={project.title} project={project} hackathon />
            ))}
          </div>
        </div>

        {/* ---------- React / Next.js Projects ---------- */}
        <div className="mb-16">
          <h3 className="font-mono text-2xl uppercase tracking-wide text-[color:var(--teal)] mb-6">
            React / NEXT Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {nextProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        {/* ---------- Practice / Extra Projects ---------- */}
        <div>
          <h3 className="font-mono text-2xl uppercase tracking-wide text-[color:var(--amber)] mb-6">
            Extra &amp; Practice Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {practiceProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
