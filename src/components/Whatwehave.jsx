import { useState, useEffect, useRef } from "react";

const items = [
  {
    id: 1,
    heading: "Lorium Ipsum",
    para: "Lorem ipsum dolor sit amet, convallis vei da ornalis du vel, z dolor sit am id. Lorem ipsum dolor sit amet convallis vei da ornalis du vel, consequat dui dolor sit amet. Lorem ipsum dolor sit amet amet ornalles vei du.",
    bullets: ["consequat dui dolor si", "consequat dui dolor si", "consequat dui dolor si"],
  },
  {
    id: 2,
    heading: "Lorium Ipsum",
    para: "Lorem ipsum dolor sit amet, convallis vei da ornalis du vel, z dolor sit am id. Lorem ipsum dolor sit amet convallis vei da ornalis du vel, consequat dui dolor sit amet. Lorem ipsum dolor sit amet amet ornalles vei du.",
    bullets: ["consequat dui dolor si", "consequat dui dolor si", "consequat dui dolor si"],
  },
  {
    id: 3,
    heading: "Lorium Ipsum",
    para: "Lorem ipsum dolor sit amet, convallis vei da ornalis du vel, z dolor sit am id. Lorem ipsum dolor sit amet convallis vei da ornalis du vel, consequat dui dolor sit amet. Lorem ipsum dolor sit amet amet ornalles vei du.",
    bullets: ["consequat dui dolor si", "consequat dui dolor si", "consequat dui dolor si"],
  },
];

const WhatWeHave = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="wwh-section" ref={sectionRef}>

      <h2 className={`wwh-section-title ${visible ? "wwh-anim-in" : ""}`}>
        What We Have For Your Kid
      </h2>

      <div className="wwh-cards-list">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`wwh-card-outer ${visible ? "wwh-anim-in" : ""}`}
            style={{ transitionDelay: `${0.15 + index * 0.18}s` }}
          >
            <div className="wwh-card-inner">

              {/* LEFT — single image overflowing above card */}
              <div className="wwh-left-col">
                {/* Replace with: <img src="..." alt="..." className="wwh-left-img-tag" /> */}
                <div className="wwh-left-img" />
              </div>

              {/* RIGHT — content */}
              <div className="wwh-right-col">
                <h3 className="wwh-card-heading">{item.heading}</h3>
                <p className="wwh-card-para">{item.para}</p>
                <ul className="wwh-card-bullets">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default WhatWeHave;