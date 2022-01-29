import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <h1 className="heading">
        <FontAwesomeIcon icon={faStopwatch} className="icon" />
        Stopwatch
      </h1>
    </header>
  );
}

export default Header;
