import "./about.css";
import myWorks from "../../../../public/assets/about/my-works.png";
import btnIcon from "../../../../public/assets/about/btnIcon.svg";
import star1 from "../../../../public/assets/about/star1.svg";
import bg1 from "../../../../public/assets/about/bg1.png";
import icon2 from "../../../../public/assets/about/icon2.png";
import resumeIcon from "../../../../public/assets/about/resumeIcon2.png";
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
function About() {
  return (
    <div>
      <section className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6" data-aos="zoom-in">
              <div className="about-me-box shadow-box">
                <img src={bg1} alt="BG" className="bg-img" />
                <div className="img-box">
                  <img
                    src="https://i.ibb.co/DkxszhN/myImg.png"
                    alt="About Me"
                  />
                </div>
                <div className="infos">
                  <h4 className="text-uppercase ">
                    A Passionate Web Developer
                  </h4>
                  <h1>Rashid Sarkar.</h1>
                  <p>I am a Web Developer based in Bangladesh.</p>
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
                        <span className="merqueText ">
                          Hey there! I'm Rashid Sarkar, a passionate web
                          developer based in Bangladesh.
                          <img src={star1} alt="Star" />
                          With a solid year of experience in the field, I
                          specialize in crafting delightful user experiences
                          using React. js on the frontend and Express on the
                          backend.
                          <img src={star1} alt="Star" />I strive to create
                          seamless user experiences and aim to be the top MERN
                          developer in 🇧🇩.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gx-row d-flex gap-24">
                  <div data-aos="zoom-in">
                    <div className="about-project-box info-box shadow-box h-full">
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
                    <img src={bg1} alt="BG" className="bg-img" />
                    <div className="icon-boxes">
                      <FaReact className="skillIcon" />
                      <TbBrandJavascript className="skillIcon" />
                      <SiExpress className="skillIcon" />
                      <SiMongodb className="skillIcon" />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>specialization</h4>
                        <h1>My Skills</h1>
                      </div>

                      <a href="./service/service.html" className="about-btn">
                        <img src={btnIcon} alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>

                <div data-aos="zoom-in">
                  <div className="about-profile-box info-box shadow-box h-full">
                    <img src={bg1} alt="BG" className="bg-img" />
                    <div className="inner-profile-icons shadow-box">
                      <a href="#">
                        <FaLinkedin className="skillIcon" />
                      </a>
                      <a href="#">
                        <FaGithub className="skillIcon" />
                      </a>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>Stay with me</h4>
                        <h1>Profiles</h1>
                      </div>

                      <a href="./contact/index.html" className="about-btn">
                        <img src={btnIcon} alt="Button" />
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
                <img src={bg1} alt="BG" className="bg-img" />
                <div className="clients d-flex align-items-start gap-24 justify-content-center">
                  <div className="client-item">
                    <h1>02</h1>
                    <p>
                      Years <br />
                      Learning Experience
                    </p>
                  </div>

                  <div className="client-item">
                    <h1>+750</h1>
                    <p>
                      GitHub <br />
                      Contributions
                    </p>
                  </div>

                  <div className="client-item">
                    <h1>+15</h1>
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
                <img src={bg1} alt="BG" className="bg-img" />
                <img src={icon2} alt="Icon" className="star-icon" />
                <h1>
                  Let's <br />
                  work <span>together.</span>
                </h1>
                <a href="#" className="about-btn">
                  <img src={btnIcon} alt="Button" />
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
