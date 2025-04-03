import { Link } from "react-router-dom";

function Nav_list() {
  return (
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
  );
}

export default Nav_list