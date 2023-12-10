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
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="./about/index.html">About</a>
                </li>
                <li>
                  <a href="./works/index.html">Works</a>
                </li>
                <li>
                  <a href="./contact/index.html">Contact</a>
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
