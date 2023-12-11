import { Link, NavLink } from "react-router-dom";
import "./header.css";
function Header() {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutPage"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/worksPage"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white" : ""
          }
        >
          Works
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactPage"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
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
                {/* <li className="active">
                  <NavLink to={`/`}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={`/aboutPage`}>About</NavLink>
                </li>
                <li>
                  <Link>Works</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li> */}
                {navLinks}
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
