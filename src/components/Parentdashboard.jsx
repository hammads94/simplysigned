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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
            ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
          <p className="pdb-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et
          </p>
          <p className="pdb-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et
          </p>
        </div>

      </div>
    </section>
  );
};

export default ParentDashboard;