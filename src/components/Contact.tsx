const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <div className="glass rounded-[40px] p-10 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
            Let's Work Together
          </h2>

          <p className="text-gray-400 text-lg leading-9 max-w-3xl mx-auto">
            Interested in collaborating or hiring me for frontend development
            projects? Feel free to contact me anytime.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">
            <a href="mailto:anees2217117@gmail.com" className="primary-btn">
              Send Email
            </a>

            <a
              href="https://wa.me/923022217117"
              target="_blank"
              className="secondary-btn"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
