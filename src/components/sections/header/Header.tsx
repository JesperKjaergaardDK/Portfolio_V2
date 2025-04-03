import logo from "../../../assets/Logo.svg";
import open_ham from "../../../assets/Hamburger_open.svg";
import close_ham from "../../../assets/Hamburger_close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Nav_list from "../../UI/Nav_list";

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
            <img src={logo} alt="Jesper K logo" />
          </Link>

          <button type="button" onClick={handleToggleMenu}>
            <img src={dropdownIsOpen ? open_ham : close_ham} alt="mode" />
          </button>
        </div>

        {dropdownIsOpen && (
          <div className="header__dropdown">
            <Nav_list />
          </div>
        )}

        <div className="header__desktop">
          <img src={logo} alt="Jesper K logo" />
          <nav className="header__nav">
            <Nav_list />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
