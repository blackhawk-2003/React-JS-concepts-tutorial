import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/home" className="home-link">
          <div className="home-icon">🏠</div>
          <span className="home-text">HomePage</span>
        </Link>
        <nav className="header-navigation">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="recipe-list" className="nav-menu-link">
                <span className="menu-icon">🍳</span>
                <span className="menu-text">Recipes</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="comment-list" className="nav-menu-link">
                <span className="menu-icon">💬</span>
                <span className="menu-text">Comments</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
