const experiences = [
  {
    role: "Accountant",
    company: "Embroideries",
    duration: "2025 — Present",
    color: "var(--green)",
  },
  {
    role: "Data Entry Operator",
    company: "Liberty Mills Limited",
    duration: "2025",
    color: "var(--teal)",
  },
  {
    role: "Teacher",
    company: "SS Programmer School",
    duration: "2024 — 2025",
    color: "var(--amber)",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <span className="section-eyebrow" style={{ fontSize: "3rem" }}>
          Experience
        </span>

        <div className="glass rounded-2xl p-8 md:p-10 max-w-3xl">
          <div className="space-y-10">
            {experiences.map((item) => (
              <div key={item.role} className="commit-line">
                <span
                  className="commit-dot"
                  style={{ background: item.color }}
                  aria-hidden="true"
                />
                <p className="font-mono text-xs text-[color:var(--text-muted)] mb-2">
                  {item.duration}
                </p>
                <h3 className="font-display text-xl font-bold mb-1">
                  {item.role}
                </h3>
                <p style={{ color: item.color }}>{item.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
