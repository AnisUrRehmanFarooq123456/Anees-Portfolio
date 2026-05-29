const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding">
      <div className="container-width w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[6px] text-blue-400 mb-6 text-lg">
              Frontend Web Developer
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Anees Ur <br />
              <span className="gradient-text">Rehman Farooq</span>
            </h1>

            <p className="text-gray-400 leading-9 mt-8 text-lg max-w-2xl">
              Frontend Developer skilled in React, Next.js, TypeScript and
              responsive UI development. Passionate about building modern,
              scalable and clean web applications.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href="/cv/Anees Ur Rehman Farooq.pdf"
                download
                className="primary-btn"
              >
                Download CV <span className="arrow">↓</span>
              </a>

              <a
                href="https://wa.me/923022217117"
                target="_blank"
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
            <div className="glass grid-card card-hover h-[220px] flex flex-col justify-center items-center text-center">
              <h3 className="text-7xl font-bold text-[#61A3FA]">6+</h3>

              <p className="text-gray-400 text-lg mt-6">
                Real Projects Completed
              </p>
            </div>

            <div className="glass grid-card card-hover h-[220px] flex flex-col justify-between mt-10">
              <div className="flex flex-col items-center text-center justify-center flex-1">
                <h3 className="text-4xl font-bold text-[#61A3FA]">MERN</h3>

                <p className="text-gray-400 mt-6">
                  Full Stack Learning Journey
                </p>
              </div>
            </div>
            <div className="glass grid-card card-hover h-[220px] flex flex-col justify-between">
              <div className="flex flex-col items-center text-center justify-center flex-1">
                <h3 className="text-4xl font-bold text-[#61A3FA]">React</h3>

                <p className="text-gray-400 text-lg mt-6">
                  Frontend Development
                </p>
              </div>
            </div>

            <div className="glass grid-card card-hover h-[220px] flex flex-col justify-between mt-10">
              <div className="flex flex-col items-center text-center justify-center flex-1">
                <h3 className="text-4xl font-bold text-[#61A3FA]">UI/UX</h3>

                <p className="text-gray-400 mt-6">
                  Responsive Interface Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
