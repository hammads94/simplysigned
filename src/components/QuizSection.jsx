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
            Interactive quizzes help learners test their knowledge and reinforce ASL skills. After each lesson, quizzes assess recognition of signs, memory and accuracy. Quizzes make learning fun while providing valuable feedback, ensuring that every learner improves their sign language proficiency effectively.
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