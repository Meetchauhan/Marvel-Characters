import { Link } from "react-router-dom";
import logo from "../../images/marvel.png";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="header-logo" className="logo-image" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Characters</Link>
          </li>
          <li>
            <Link to="favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
