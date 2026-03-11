import { useState, useEffect, useRef } from "react";

import blueBg from "../assets/benefits4.png";
import characterGif from "../assets/character3.gif";
import circleImg from "../assets/4.png";
import backImg from "../assets/back.png";

const BenefitsOfSignLanguage = () => {
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
    <section className="bosl-section" ref={sectionRef}>

      {/* CENTER HEADING — above card */}
      <h2 className={`bosl-heading ${visible ? "bosl-visible" : ""}`}>
        Benefits of Sign Language
      </h2>

      {/* CARD — back.png behind the two columns */}
      <div className={`bosl-card ${visible ? "bosl-visible" : ""}`}>
        <img src={backImg} alt="" className="bosl-card-bg" />

        <div className="bosl-inner">

          {/* LEFT — character scene */}
          <div className={`bosl-left ${visible ? "bosl-visible" : ""}`}>
            <div className="bosl-scene">
              <img src={blueBg} alt="" className="bosl-oval-bg" />
              <img src={circleImg} alt="" className="bosl-circle" />
              <img src={characterGif} alt="Character" className="bosl-character" />
            </div>
          </div>

          {/* RIGHT — content */}
          <div className={`bosl-right ${visible ? "bosl-visible" : ""}`}>
            <p className="bosl-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu diam vel
              nibh malesuada sollicitudin eget quis neque Sed aliquet libero at nisi
              lacinia, quis ultrices diam posuere.
            </p>
            <p className="bosl-para">
              Morbi accumsan purus ipsum, eu dapibus risus consectetur ut. Ut quis mauris
              sit amet justo vulputate posuere nec a metus. Donec quis blandit felis.
              Proin et odio laoreet,
            </p>
            <p className="bosl-para">
              convallis dui vel, consequat dui. Aliquam tincidunt metus vel justo
              consectetur accumsan. Suspendisse pulvinar neque sed massa aliquet lacinia.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default BenefitsOfSignLanguage;