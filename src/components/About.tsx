const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-width">
        <div className="text-center">
          <span className="section-eyebrow" style={{ fontSize: "3rem" }}>
            About Me
          </span>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="glass rounded-2xl p-8 lg:col-span-2 card-hover">
            <p className="text-[color:var(--text-muted)] leading-9 text-lg">
              Frontend Web Developer with a strong understanding of React,
              TypeScript, JavaScript and responsive design principles.
              Transitioning from an accounting and teaching background into
              software engineering, bringing analytical thinking, communication
              and problem-solving abilities. Passionate about building
              attractive and modern user experiences.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 card-hover flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-semibold mb-6">
                Quick Info
              </h3>

              <ul className="space-y-5 text-[color:var(--text-muted)]">
                <li className="flex items-center gap-3">
                  <span
                    className="lang-dot"
                    style={{ background: "var(--teal)" }}
                  />
                  Karachi, Pakistan
                </li>
                <li className="flex items-center gap-3">
                  <span
                    className="lang-dot"
                    style={{ background: "var(--amber)" }}
                  />
                  Software Engineering
                </li>
                <li className="flex items-center gap-3">
                  <span
                    className="lang-dot"
                    style={{ background: "var(--rose)" }}
                  />
                  MERN Stack
                </li>
                <li className="flex items-center gap-3">
                  <span
                    className="lang-dot"
                    style={{ background: "var(--violet)" }}
                  />
                  Frontend Developer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
