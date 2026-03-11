import { useState, useEffect, useRef } from "react";

import orangeBg from "../assets/2.png";
import characterGif from "../assets/character2.gif";
import circleImg from "../assets/sign2.png";
import backImg from "../assets/back.png";

const WhatIsSignLanguage = () => {
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
    <section className="wisl-section" ref={sectionRef}>

      {/* CENTER HEADING — above the card */}
      <h2 className={`wisl-heading ${visible ? "wisl-visible" : ""}`}>
        What Is Sign Language
      </h2>

      {/* CARD — back.png behind the two columns */}
      <div className={`wisl-card ${visible ? "wisl-visible" : ""}`}>
        <img src={backImg} alt="" className="wisl-card-bg" />

        <div className="wisl-inner">

          {/* LEFT — character scene */}
          <div className={`wisl-left ${visible ? "wisl-visible" : ""}`}>
            <div className="wisl-scene">
              <img src={orangeBg} alt="" className="wisl-oval-bg" />
              <img src={circleImg} alt="" className="wisl-circle" />
              <img src={characterGif} alt="Character" className="wisl-character" />
            </div>
          </div>

          {/* RIGHT — content */}
          <div className={`wisl-right ${visible ? "wisl-visible" : ""}`}>
            <p className="wisl-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu diam vel
              nibh malesuada sollicitudin eget quis neque Sed aliquet libero at nisi
              lacinia, quis ultrices diam posuere.
            </p>
            <p className="wisl-para">
              Morbi accumsan purus ipsum, eu dapibus risus consectetur ut. Ut quis mauris
              sit amet justo vulputate posuere nec a metus. Donec quis blandit felis.
              Proin et odio laoreet,
            </p>
            <p className="wisl-para">
              convallis dui vel, consequat dui. Aliquam tincidunt metus vel justo
              consectetur accumsan. Suspendisse pulvinar neque sed massa aliquet lacinia.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default WhatIsSignLanguage;