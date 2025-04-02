import { Link } from "react-router-dom";
import Button from "../../components/UI/Button";

function Error() {
  return (
    <div className="error">
      <div className="error__info">
        <h1 className="error__info-highlight">404</h1>
        <h2>Page not found</h2>
        <p>The page you are looking for does not exist.</p>
      </div>

      <Link to={"/"}>
        <Button>Go back to the homepage</Button>
      </Link>
    </div>
  );
}

export default Error;
