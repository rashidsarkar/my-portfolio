import star2 from "../../MySkills/images/star-2.png";
import bg1 from "../../MySkills/images/bg1.png";
import btnIcom from "../../MySkills/images/icon.svg";
import Luxe from "../assets/Luxe-Home(1).png";
import RongilaWedding from "../assets/Rongila-Wedding-Planner.png";
import Serfix from "../assets/Serfix.png";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import "./workPage.css";
function WorksPage() {
  return (
    <>
      <section className="projects-area">
        <div className="container">
          <h1 className="section-heading" data-aos="fade-up">
            <img src={star2} alt="Star" /> All Projects
            <img src={star2} alt="Star" />
          </h1>
          <div className="row">
            <div className="col-md-4">
              <div data-aos="zoom-in">
                <div className="project-item shadow-box">
                  <img src={bg1} alt="BG" className="bg-img" />
                  <div className="project-img">
                    <img src={project1} alt="Project" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="project-info">
                      <p>WEB DESIGNING</p>
                      <h1>Dynamic</h1>
                    </div>
                    <a href="../works/index.html" className="project-btn">
                      <img src={btnIcom} alt="Button" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <h1 className="section-heading" data-aos="fade-up">
                <img src={star2} alt="Star" /> All Projects
                <img src={star2} alt="Star" />
              </h1>

              <div className="d-flex align-items-start gap-24">
                <div data-aos="zoom-in" className="flex-1">
                  <div className="project-item shadow-box">
                    <a className="overlay-link" href="../works/index.html"></a>
                    <img
                      src="./assets/images/bg1.png"
                      alt="BG"
                      className="bg-img"
                    />
                    <div className="project-img">
                      <img src="./assets/images/project3.jpeg" alt="Project" />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="project-info">
                        <p>mOBILE DESIGNING</p>
                        <h1>Seven Studio</h1>
                      </div>
                      <a href="../works/index.html" className="project-btn">
                        <img src="./assets/images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>

                <div data-aos="zoom-in" className="flex-1">
                  <div className="project-item shadow-box">
                    <a className="overlay-link" href="../works/index.html"></a>
                    <img
                      src="./assets/images/bg1.png"
                      alt="BG"
                      className="bg-img"
                    />
                    <div className="project-img">
                      <img src="./assets/images/project4.jpeg" alt="Project" />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="project-info">
                        <p>Branding</p>
                        <h1>Raven Studio</h1>
                      </div>
                      <a href="../works/index.html" className="project-btn">
                        <img src="./assets/images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorksPage;
