import { useState, useEffect, useRef } from "react";
import image1 from "../assets/games.png";

const GamesSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="gms-section" ref={sectionRef}>

      {/* CENTER HEADING */}
      <h2 className={`gms-title ${visible ? "gms-visible" : ""}`}>
        Games
      </h2>

      <div className="gms-inner">

        {/* LEFT — single image */}
        <div className={`gms-left ${visible ? "gms-visible" : ""}`}>

            <img src={image1} alt="Games" className="gms-img" />
    
        </div>

        {/* RIGHT — content */}
        <div className={`gms-right ${visible ? "gms-visible" : ""}`}>
          <p className="gms-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
            ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
          <p className="gms-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et
          </p>
          <p className="gms-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et
          </p>
          <p className="gms-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et
          </p>
        </div>

      </div>
    </section>
  );
};

export default GamesSection;