import logo from "../../../assets/Logo.svg";
import open_ham from "../../../assets/Hamburger_open.svg";
import close_ham from "../../../assets/Hamburger_close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [dropdownIsOpen, setropdownIsOpen] = useState(false);

  function handleToggleMenu() {
    setropdownIsOpen(!dropdownIsOpen);
  }

  return (
    <header>
      <div className="header">
        <div className="header__mobile">
          <Link to="/">
            <img className="header__img" src={logo} alt="" />
          </Link>

          <button type="button" onClick={handleToggleMenu}>
            <img src={dropdownIsOpen ? open_ham : close_ham} alt="mode" />
          </button>
        </div>

        {dropdownIsOpen && (
          <div className="header__dropdown">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="#about">About</Link>
                </li>
                <li>
                  <Link to="#skills">Skills</Link>
                </li>
                <li>
                  <Link to="#projects">Projets</Link>
                </li>
              </ul>
            </nav>
          </div>
        )}

        <div className="header__desktop">
          <img className="header__img" src={logo} alt="" />
          <nav className="header__nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="#about">About</Link>
              </li>
              <li>
                <Link to="#skills">Skills</Link>
              </li>
              <li>
                <Link to="#projects">Projets</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
