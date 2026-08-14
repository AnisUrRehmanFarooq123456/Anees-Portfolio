const stats = [
  {
    value: "2",
    label: "Hackathons Completed",
    color: "var(--rose)",
    big: true,
  },
  {
    value: "6+",
    label: "Real Projects Completed",
    color: "var(--amber)",
    big: true,
  },
  {
    value: "React / Next",
    label: "Frontend Development",
    color: "var(--teal)",
    big: false,
  },
  {
    value: "UI / UX",
    label: "Responsive Interface Design",
    color: "var(--violet)",
    big: false,
  },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32">
      <div className="container-width w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="section-eyebrow">Frontend Web Developer</span>

            <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.08]">
              Anees Ur <br />
              <span className="gradient-text">Rehman Farooq</span>
            </h1>

            {/* Terminal window — signature element */}
            <div className="terminal-window mt-8 max-w-xl">
              <div className="terminal-bar">
                <span
                  className="terminal-dot"
                  style={{ background: "#fb7185" }}
                />
                <span
                  className="terminal-dot"
                  style={{ background: "#f2b544" }}
                />
                <span
                  className="terminal-dot"
                  style={{ background: "#7ee08a" }}
                />
                <span className="terminal-filename">about.ts</span>
              </div>
              <div className="terminal-body text-sm md:text-[15px] leading-8">
                <p>
                  <span className="terminal-prompt">const</span>{" "}
                  <span className="terminal-key">developer</span> = {"{"}
                </p>
                <p className="pl-4 text-[color:var(--text-muted)]">
                  stack:{" "}
                  <span className="terminal-string">
                    &quot;React, Next.js, TypeScript&quot;
                  </span>
                  ,
                </p>
                <p className="pl-4 text-[color:var(--text-muted)]">
                  focus:{" "}
                  <span className="terminal-string">
                    &quot;clean, scalable, responsive UI&quot;
                  </span>
                  ,
                </p>
                <p className="pl-4 text-[color:var(--text-muted)]">
                  background:{" "}
                  <span className="terminal-string">
                    &quot;accounting &amp; teaching → software engineering&quot;
                  </span>
                </p>
                <p>
                  {"}"}
                  <span className="caret" aria-hidden="true" />
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-9">
              <a
                href="/cv/Anees Ur Rehman Farooq CV.pdf"
                download
                className="primary-btn"
              >
                Download CV <span className="arrow">↓</span>
              </a>

              <a
                href="https://wa.me/923022217117"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                WhatsApp
              </a>

              <a href="mailto:anees2217117@gmail.com" className="secondary-btn">
                Email Me
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass stat-card card-hover h-[180px] flex flex-col items-center justify-center text-center"
              >
                <span
                  className="stat-dot mb-4"
                  style={{ background: stat.color }}
                  aria-hidden="true"
                />
                <h3
                  className={`stat-number leading-tight ${
                    stat.big ? "text-4xl md:text-5xl" : "text-xl md:text-2xl"
                  }`}
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </h3>
                <p className="text-[color:var(--text-muted)] text-lg mt-3">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
