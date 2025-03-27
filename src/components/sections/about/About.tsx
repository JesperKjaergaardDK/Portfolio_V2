import aboutImg from "../../../assets/About_images_portfolios.png";

function About() {
  return (
    <section id="about" className="about">
      <h2 className="text_center">Who am i</h2>

      <div className="about__content">
        <img className="about__img" src={aboutImg} alt="" />

        <div className="about__text">
          <p>
            I see web design and frontend development as a form of art blending
            creativity with structure. What fascinates me is the challenge of
            crafting engaging and visually appealing designs while working
            within a structured ruleset that ensures the best experience for
            users.
          </p>
          <p>
            To enhance my design skills further, I also completed a graphic
            design course, helping me refine my ability to create visually
            compelling and user-friendly interfaces
          </p>
          <p>
            I have completed my studies as a Data Technician specializing in
            programming. Throughout my education, many of my projects focused on
            web development, allowing me to gain experience in frontend,
            backend, and database management.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
