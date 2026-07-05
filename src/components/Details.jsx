import React, { useEffect, useRef, useState } from "react";

function Details() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const details = [
    { label: "Full Name", value: "Md Faizanuzzaman" },
    { label: "Date of Birth", value: "10 March 1999" },
    { label: "Education", value: "M.Ed (Urdu)" },
    {
      label: "Islamic Studies",
      value: "Hafiz,Alim (Darul Uloom Nadwatul Ulama, Lucknow, UP)",
    },
    { label: "Profession", value: "Government Teacher" },
    { label: "School Name", value: "ABC Pvt Ltd" },
    { label: "Father", value: "Agriculturist" },
    { label: "Mother", value: "Housewife" },
    {
      label: "Hobbies",
      value: "Studied Arabic language and classical Islamic texts",
    },
    { label: "Languages", value: "Hindi, English" },
  ];

  return (
    <section
      ref={sectionRef}
      className={`section fade-section ${show ? "show" : ""}`}
    >
      <h2>Personal Details</h2>

      <div className="details-box">
        {details.map((item, index) => (
          <p
            key={index}
            className="fade-item"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <b>{item.label}:</b> {item.value}
          </p>
        ))}
      </div>
    </section>
  );
}

export default Details;