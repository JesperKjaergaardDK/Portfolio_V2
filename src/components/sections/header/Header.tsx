import React from "react";
import logo from "../../../assets/Logo png Ps.png";

function Header() {
  return (
    <header className="header">
      <div className="header__mobile">
        <img className="header__img" src={logo} alt="" />
        <img src="" alt="mode" />
      </div>

      <div className="header__desktop">
        <img className="header__img" src={logo} alt="" />

        <nav className="header__nav">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projets</a>
            </li>
          </ul>
        </nav>

        <p>Dark mode</p>
      </div>
    </header>
  );
}

export default Header;
