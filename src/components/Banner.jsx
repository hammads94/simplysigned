import { useState, useEffect } from "react";

import logoGif from "../assets/logoanimation.gif";
import characterGif from "../assets/character1.gif";
import archBg from "../assets/1.png";
import circleBg from "../assets/herosection-circle.png";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">

      {/* LOGO — top center */}
      <div className={`hero-logo-wrap ${loaded ? "visible" : ""}`}>
        <img src={logoGif} alt="Simply Sign Logo" className="hero-logo" />
      </div>

      <div className="hero-inner">

        {/* LEFT — text content */}
        <div className={`hero-left ${loaded ? "visible" : ""}`}>
          <h1 className="hero-heading">Welcome to ASL</h1>
          <p className="hero-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed eu diam vel nibh malesuada sollicitudin eget quis.
          </p>
          <button className="hero-btn">LET'S GET STARTED</button>
        </div>

        {/* RIGHT — character scene */}
        <div className={`hero-right ${loaded ? "visible" : ""}`}>

          {/* Purple arch background */}
          <img src={archBg} alt="" className="hero-arch" />

          {/* Cream circle — bottom-left of arch */}
          <img src={circleBg} alt="" className="hero-circle" />

          {/* Character GIF — on top of arch */}
          <img src={characterGif} alt="Character" className="hero-character" />

        </div>

      </div>
    </section>
  );
};

export default HeroSection;