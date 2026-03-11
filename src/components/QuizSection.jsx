import { useState, useEffect, useRef } from "react";
import learnImg from "../assets/quizimage.png";

const QuizSection = () => {
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
    <section className="qzs-section" ref={sectionRef}>
      <div className="qzs-inner">

        {/* LEFT — content */}
        <div className={`qzs-left ${visible ? "qzs-visible" : ""}`}>
          <h2 className="qzs-title">Quiz</h2>
          <p className="qzs-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
            ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
          <p className="qzs-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et
          </p>
          <p className="qzs-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et
          </p>
        </div>

        {/* RIGHT — single image */}
        <div className={`qzs-right ${visible ? "qzs-visible" : ""}`}>
          <img src={learnImg} alt="Quiz" className="qzs-img" />
        </div>

      </div>
    </section>
  );
};

export default QuizSection;