import Button from "../../UI/Button";
import headImg from "../../../assets/Hand on chin hero img.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__info">
        <h1>
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
        <p className="p_large">
          I'm a certified Data Technician specializing in programming, now
          shifting my focus to Frontend Development to craft seamless and
          engaging user experiences
        </p>
        <a href="#projects">
          <Button is_highlight>See My Creations</Button>
        </a>
      </div>

      <img
        className="hero__img"
        src={headImg}
        alt="Creater of the webstie with a closed hand on his chin looking a bit to the side"
      />
    </section>
  );
}

export default Hero;
