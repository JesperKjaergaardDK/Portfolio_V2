import Contact from "../../UI/Contact";

import logo from "../../../assets/Logo.svg";
import github from "/icons/footer/icons8-github-32.png";
import linkedin from "/icons/footer/icons8-linkedin-32.png";

import mail from "/icons/footer/icons8-mail-32.png";
import phone from "/icons/footer/icons8-phone-32.png";
import address from "/icons/footer/icons8-location-32.png";
import { Link } from "react-router-dom";
import Nav_list from "../../UI/Nav_list";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer__logo-container">
          <img className="footer__logo" src={logo} alt="logo" />
          <div className="footer__socials">
            <Link to="https://www.linkedin.com/in/jesper-kj%C3%A6rgaard-b61251235/">
              <img src={linkedin} alt="linkedin" />
            </Link>
            <Link to="https://github.com/JesperKjaergaardDK">
              <img src={github} alt="github" />
            </Link>
          </div>

          <div className="footer__icons8">
            <p>
              Most icons used are from{" "}
              <a href="https://icons8.com/icons">Icon8</a>
            </p>

            <p>
              Check out the icons i used in my {" "}
              <a href="https://github.com/JesperKjaergaardDK/Portfolio_V2/blob/main/README.md">
                Github
              </a>
            </p>
          </div>
        </div>

        <nav className="footer__nav">
          <h6>Navigation</h6>
          <Nav_list />
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
