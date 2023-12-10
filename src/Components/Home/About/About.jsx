import "./about.css";
import myWorks from "../../../../public/assets/about/my-works.png";
import btnIcon from "../../../../public/assets/about/btnIcon.svg";
import star1 from "../../../../public/assets/about/star1.svg";
import bg1 from "../../../../public/assets/about/bg1.png";
import resumeIcon from "../../../../public/assets/about/resumeIcon2.png";
function About() {
  return (
    <div>
      <section className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6" data-aos="zoom-in">
              <div className="about-me-box shadow-box">
                <a className="overlay-link" href="./about/index.html"></a>
                <img src={bg1} alt="BG" className="bg-img" />
                <div className="img-box">
                  <img
                    src="https://i.ibb.co/DkxszhN/myImg.png"
                    alt="About Me"
                  />
                </div>
                <div className="infos">
                  <h4 className="text-uppercase ">A WEB Developer</h4>
                  <h1>David Henderson.</h1>
                  <p>I am a Web Designer based in san francisco.</p>
                  <a href="#" className="about-btn">
                    <img src={btnIcon} alt="Button" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="about-credentials-wrap">
                <div data-aos="zoom-in">
                  <div className="banner shadow-box">
                    <div className="marquee">
                      <div>
                        <span>
                          LATEST WORK AND <b>FEATURED</b>
                          <img src={star1} alt="Star" />
                          LATEST WORK AND <b>FEATURED</b>
                          <img src={star1} alt="Star" />
                          LATEST WORK AND <b>FEATURED</b>
                          <img src={star1} alt="Star" />
                          LATEST WORK AND <b>FEATURED</b> LATEST WORK AND
                          <img src={star1} alt="Star" />
                          LATEST WORK AND <b>FEATURED</b> LATEST WORK AND
                          <img src={star1} alt="Star" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gx-row d-flex gap-24">
                  <div data-aos="zoom-in">
                    <div className="about-project-box info-box shadow-box h-full">
                      <a className="overlay-link" href="./works/index.html"></a>
                      <img src={bg1} alt="BG" className="bg-img" />
                      <img src={myWorks} alt="My Works" />
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="infos">
                          <h4>SHOWCASE</h4>
                          <h1>Projects</h1>
                        </div>

                        <a href="#" className="about-btn">
                          <img src={btnIcon} alt="Button" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-24">
            <div className="col-md-12">
              <div className="blog-service-profile-wrap d-flex gap-24">
                <div data-aos="zoom-in">
                  <div className="about-blog-box info-box shadow-box h-full">
                    <img src={bg1} alt="BG" className="bg-img" />
                    <img src={resumeIcon} className="resumeIcon" alt="GFonts" />
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>My Resume</h4>
                        <h1>Download Now</h1>
                      </div>

                      <a href="./blog/blog.html" className="about-btn">
                        <img src={btnIcon} alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>

                <div data-aos="zoom-in" className="flex-1">
                  <div className="about-services-box info-box shadow-box h-full">
                    <a
                      href="./service/service.html"
                      className="overlay-link"
                    ></a>
                    <img
                      src="./assets/images/bg1.png"
                      alt="BG"
                      className="bg-img"
                    />
                    <div className="icon-boxes">
                      <i className="iconoir-camera"></i>
                      <i className="iconoir-design-pencil"></i>
                      <i className="iconoir-color-filter"></i>
                      <i className="iconoir-dev-mode-phone"></i>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>specialization</h4>
                        <h1>Services Offering</h1>
                      </div>

                      <a href="./service/service.html" className="about-btn">
                        <img src="./assets/images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>

                <div data-aos="zoom-in">
                  <div className="about-profile-box info-box shadow-box h-full">
                    <img
                      src="./assets/images/bg1.png"
                      alt="BG"
                      className="bg-img"
                    />
                    <div className="inner-profile-icons shadow-box">
                      <a href="#">
                        <i className="iconoir-dribbble"></i>
                      </a>
                      <a href="#">
                        <i className="iconoir-twitter"></i>
                      </a>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>Stay with me</h4>
                        <h1>Profiles</h1>
                      </div>

                      <a href="./contact/index.html" className="about-btn">
                        <img src="./assets/images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-24">
            <div className="col-md-6" data-aos="zoom-in">
              <div className="about-client-box info-box shadow-box">
                <img
                  src="./assets/images/bg1.png"
                  alt="BG"
                  className="bg-img"
                />
                <div className="clients d-flex align-items-start gap-24 justify-content-center">
                  <div className="client-item">
                    <h1>07</h1>
                    <p>
                      Years <br />
                      Experience
                    </p>
                  </div>

                  <div className="client-item">
                    <h1>+125</h1>
                    <p>
                      CLIENTS <br />
                      WORLDWIDE
                    </p>
                  </div>

                  <div className="client-item">
                    <h1>+210</h1>
                    <p>
                      Total <br />
                      Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="zoom-in">
              <div className="about-contact-box info-box shadow-box">
                <a className="overlay-link" href="./contact/index.html"></a>
                <img
                  src="./assets/images/bg1.png"
                  alt="BG"
                  className="bg-img"
                />
                <img
                  src="./assets/images/icon2.png"
                  alt="Icon"
                  className="star-icon"
                />
                <h1>
                  Let's <br />
                  work <span>together.</span>
                </h1>
                <a href="#" className="about-btn">
                  <img src="./assets/images/icon.svg" alt="Button" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
