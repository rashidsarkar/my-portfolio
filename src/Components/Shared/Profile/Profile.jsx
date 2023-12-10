import { FaGithub, FaLinkedin } from "react-icons/fa6";
import bg1 from "../../../assets/about/bg1.png";
import btnIcon from "../../../assets/about/btnIcon.svg";

function Profile() {
  return (
    <>
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
    </>
  );
}

export default Profile;
