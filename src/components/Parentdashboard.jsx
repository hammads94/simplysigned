import { useState, useEffect, useRef } from "react";

import image1 from "../assets/dashboard.png";

const ParentDashboard = () => {
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
    <section className="pdb-section" ref={sectionRef}>
      <div className="pdb-inner">

        {/* LEFT — single image */}
        <div className={`pdb-left ${visible ? "pdb-visible" : ""}`}>
          
            <img src={image1} alt="Parent Dashboard" className="pdb-img" />
         
        </div>

        {/* RIGHT — content */}
        <div className={`pdb-right ${visible ? "pdb-visible" : ""}`}>
          <h2 className="pdb-title">Parent Dashboard</h2>
          <p className="pdb-para">
            The Parent Dashboard allows parents to track their child’s progress in learning sign language.
          </p>
          <p className="pdb-para">
            You can monitor completed lessons, quiz scores, and time spent on interactive exercises. This feature ensures parents are actively involved in their child’s ASL learning journey.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ParentDashboard;