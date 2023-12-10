import "./footer.css";
function Footer() {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="footer-content text-center">
            <a href="./index.html" className="logo">
              <img
                className="mylogo"
                src="https://i.ibb.co/Qdjzf6t/My-Logo-Logo-AI-com-removebg-preview-1.png"
                alt="Logo"
              />
            </a>
            <ul className="footer-menu">
              <li>
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
            <p className="copyright">
              &copy; All rights reserved by <span>Rashid Sarkar</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
