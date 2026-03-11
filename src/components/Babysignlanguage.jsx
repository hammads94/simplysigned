import { useState, useEffect, useRef } from "react";

import image1 from "../assets/baby-sign-lang.png";
import backImg from "../assets/back.png";

const BabySignLanguage = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bsl-section" ref={sectionRef}>

      {/* CENTER HEADING — above card */}
      <h2 className={`bsl-heading ${visible ? "bsl-visible" : ""}`}>
        Baby Sign Language
      </h2>

      {/* CARD — back.png behind the two columns */}
      <div className={`bsl-card ${visible ? "bsl-visible" : ""}`}>
        <img src={backImg} alt="" className="bsl-card-bg" />

        <div className="bsl-inner">

          {/* LEFT — Content */}
          <div className={`bsl-left ${visible ? "bsl-visible" : ""}`}>
            <p className="bsl-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu diam vel
              nibh malesuada sollicitudin eget quis magna. Curabitur accumsan risus, a
              finibus metus interdum vel, quis ultrices diam possim.
            </p>
            <p className="bsl-para">
              Nulla accumsan cursus ipsum, eu dapibus massa consectetur et. Ut quis massa
              sit amet felis malesuada posuere nec a tellus. Donec quis blandit felis.
              Praesent elit laoreet.
            </p>
            <p className="bsl-para">
              Curabitur sed vel consequat dui. Aliquam tincidunt tellus volutpat
              consectetur accumsan. Suspendisse pulvinar neque sed massa malesuada.
            </p>
          </div>

          {/* RIGHT — Image */}
          <div className={`bsl-right ${visible ? "bsl-visible" : ""}`}>
            <img src={image1} alt="Baby Sign Language" className="bsl-image" />
          </div>

        </div>
      </div>

    </section>
  );
};

export default BabySignLanguage;