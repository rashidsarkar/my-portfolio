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
            <h1 className="display-3 fw-bold mb-3">Art of Design</h1>
            <p className="lead mb-5">
              Powerful, extensible, and feature-packed frontend toolkit. Build
              and customize with Sass, utilize prebuilt grid system and
              components, and bring projects to life with powerful JavaScript
              plugins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
