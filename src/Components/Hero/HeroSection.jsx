import React from "react";
import "./herocss.css";
const HeroSection = () => {
  return (
    <section
      className="bsb-hero-1 px-3 bsb-overlay bsb-hover-pull"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/pvLsG8h/pexels-lukas-574077.jpg')",
      }}
    >
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-11 col-lg-9 col-xl-7 col-xxl-6 text-center text-white">
            <h1 className="display-5 fw-bold mb-3">
              Elevate Your Web Presence
            </h1>
            <p className="lead mb-5">
              Transform your online presence and stand out from the rest with
              our cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
