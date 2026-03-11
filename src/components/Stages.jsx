import { useState, useEffect, useRef } from "react";

import image1 from "../assets/stagesimage.png";

const Stages = () => {
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
    <section className="stg-section" ref={sectionRef}>
      <div className="stg-inner">

        {/* LEFT — single image */}
        <div className={`stg-left ${visible ? "stg-visible" : ""}`}>
          <img src={image1} alt="Stages" className="stg-main-img" />
        </div>

        {/* RIGHT — content */}
        <div className={`stg-right ${visible ? "stg-visible" : ""}`}>
          <h2 className="stg-title">Stages</h2>
          <p className="stg-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
            ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
          <p className="stg-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et
          </p>
          <p className="stg-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et
          </p>
        </div>

      </div>
    </section>
  );
};

export default Stages;