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
            Our learning stages are designed to take users from beginner to advanced ASL skills gradually. Each stage focuses on a set of signs, gestures, and practical exercises to ensure learners master sign language step by step. Progressing through the stages builds confidence and fluency in everyday communication.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Stages;