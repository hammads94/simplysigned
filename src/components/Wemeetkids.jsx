import { useState, useEffect, useRef } from "react";

const cards = [
  {
    id: 1,
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu diam vel malesuada sollicitudin.",
    heading: "Lorem Ipsum",
  },
  {
    id: 2,
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu diam vel malesuada sollicitudin.",
    heading: "Lorem Ipsum",
  },
  {
    id: 3,
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu diam vel malesuada sollicitudin.",
    heading: "Lorem Ipsum",
  },
];

const WeMeetKids = () => {
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
    <section className="wmk-section" ref={sectionRef}>

      {/* CENTER HEADING */}
      <h2 className={`wmk-heading ${visible ? "visible" : ""}`}>
        We Meet Kids Where They Are
      </h2>

      {/* CARDS ROW */}
      <div className="wmk-cards">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`wmk-card ${visible ? "visible" : ""}`}
            style={{ transitionDelay: `${0.15 + index * 0.15}s` }}
          >
            {/* Card Image */}
            <div className="wmk-card-img">
              {/* ↓ Replace with: <img src="..." alt="..." className="wmk-img" /> */}
              <div className="image-placeholder">
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
            </div>

            {/* Card Content */}
            <div className="wmk-card-content">
              <p className="wmk-card-para">{card.para}</p>
              <h3 className="wmk-card-heading">{card.heading}</h3>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default WeMeetKids;