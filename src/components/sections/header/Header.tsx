import logo from "../../../assets/Logo_png_ps.png";

function Header() {
  return (
    <header>
      <div className="header">
        <div className="header__mobile">
          <img className="header__img" src={logo} alt="" />
          <img src="" alt="mode" />
        </div>
        <div className="header__desktop">
          <img className="header__img" src={logo} alt="" />
          <nav className="header__nav">
            <ul>
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
          <p>Dark mode</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
