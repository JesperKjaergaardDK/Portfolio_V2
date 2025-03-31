import Contact from "../../UI/Contact";

import logo from "../../../assets/Logo.svg";
import github from "../../../assets/icons/footer/icons8-github-32.png";
import linkedin from "../../../assets/icons/footer/icons8-linkedin-32.png";

import mail from "../../../assets/icons/footer/icons8-mail-32.png";
import phone from "../../../assets/icons/footer/icons8-phone-32.png";
import address from "../../../assets/icons/footer/icons8-location-32.png";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer__logo-container">
          <img className="footer__logo" src={logo} alt="logo" />
          <div className="footer__socials">
            <a href="https://www.linkedin.com/in/jesper-kj%C3%A6rgaard-b61251235/">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/JesperKjaergaardDK">
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <nav className="footer__nav">
          <h6>Navigation</h6>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projets</a>
            </li>
          </ul>
        </nav>
        <div className="footer__contact">
          <h6>Contact</h6>
          <Contact src={mail} alt="E-mail">
            jezper@hotmail.dk
          </Contact>
          <Contact src={phone} alt="phone">
            (+45) 52 38 56 18
          </Contact>
          <Contact src={address} alt="address">
            Jylland Viborg
          </Contact>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
