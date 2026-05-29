const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-width">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="glass rounded-3xl p-8 lg:col-span-2 card-hover">
            <h2 className="text-4xl font-bold gradient-text mb-8">About Me</h2>

            <p className="text-gray-400 leading-9 text-lg">
              Frontend Web Developer with strong understanding of React,
              TypeScript, JavaScript and responsive design principles.
              Transitioning from accounting and teaching background into
              software engineering, bringing analytical thinking, communication
              and problem-solving abilities. Passionate about building
              attractive and modern user experiences.
            </p>
          </div>

          <div className="glass rounded-3xl p-8 card-hover flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Quick Info</h3>

              <div className="space-y-5 text-gray-300">
                <p>📍 Karachi, Pakistan</p>
                <p>🎓 Software Engineering</p>
                <p>💻 MERN Stack</p>
                <p>🚀 Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
