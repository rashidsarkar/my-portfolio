import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <>
      <header className="header-area">
        <div className="container">
          <div className="gx-row d-flex align-items-center justify-content-between">
            <a href="./index.html" className="logo">
              <img
                className="mylogo"
                src="https://i.ibb.co/Qdjzf6t/My-Logo-Logo-AI-com-removebg-preview-1.png"
                alt="Logo"
              />
            </a>

            <nav className="navbar">
              <ul className="menu">
                <li className="active">
                  <Link>Home</Link>
                </li>
                <li>
                  <Link to={`/aboutPage`}>About</Link>
                </li>
                <li>
                  <Link>Works</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>
              <a href="./contact/index.html" className="theme-btn">
                Let's talk
              </a>
            </nav>

            <a href="./contact/index.html" className="theme-btn">
              Let's talk
            </a>

            <div className="show-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
