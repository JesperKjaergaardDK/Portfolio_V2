import Button from "../../UI/Button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__info">
        <h1 className="text_center">
          Hi, I’m{" "}
          <span className="hero__info-highlight">
            <span>J</span>
            <span>e</span>
            <span>s</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
          </span>{" "}
          Kjærgaard
        </h1>
        <p className="p_large text_center">
          I'm a certified Data Technician specializing in programming, now
          shifting my focus to Frontend Development to craft seamless and
          engaging user experiences
        </p>
        <Link to="#projects">
          <Button is_highlight>See My Creations</Button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
