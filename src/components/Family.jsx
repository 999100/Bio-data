import React, { useEffect, useRef, useState } from "react";

function Family() {
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

  const familyDetails = [
    { label: "Father Name", value: "Md Qamaruzzaman" },
    { label: "Mother Name", value: "Hamida Khatoon" },
    { label: "Family Type", value: "Joint Family" },
    { label: "Brother",     value: "6 (2 married)" },
    { label: "Sisters", value: "4 (3 married)" },
    { label: "Family Values", value: "Evolving Traditional" },
    { label: "Native Place", value: "Bihar, India" },
  ];

  // const siblingsSummary = [
  //   { label: "Total Brothers", value: "6 (2 married)" },
  //   { label: "Total Sisters", value: "4 (3 married)" },
  // ];

  const brothersDetails = [
    { label: "Brother 1", value: "Md Rashiduzzama(Business)[married]" },
    { label: "Brother 2", value: "Md Rizwanuzzama(Business)[married]" },
    { label: "Brother 3", value: "Md faizanuzzaman(Teacher)"},
    { label: "Brother 4", value: "Md Rehanuzzamn(B.Tech)[Jamia Hamdard]" },
    { label: "Brother 5", value: "Md Farhanuzzaman(B.Pharm)[Jamia Hamdard]" },
    { label: "Brother 6", value: "Md Zeeshauzzaman(BCA)[Galgotia University]" },
  ];

  // const sistersDetails = [
  //   { label: "Sister 1", value: "Name Here" },
  //   { label: "Sister 2", value: "Name Here" },
  //   { label: "Sister 3", value: "Name Here" },
  //   { label: "Sister 4", value: "Name Here" },
  // ];
    const maternalGrandFatherDetails = [
    { label: "Maternal Grand Father Name", value: "Md Ilyas" },
    { label: "Place", value: "Rampur, Warisnagar" },
  ];

  const grandFatherDetails = [
    { label: "Grand Father Name", value: "Md Moti-ur-Rahman" },
  ];
  const sonsDetails = [
    { label: "Son 1", value: "Md Qamaruzzaman (Father)" },
    { label: "Son 2", value: "Md Safi-ur-Rahman (Uncle)" },
  ];

  return (
    <section ref={sectionRef} className={`section fade-section ${show ? "show" : ""}`}>
      <h2>Family Details</h2>

      <div className="details-box">
        {familyDetails.map((item, index) => (
          <p
            key={index}
            className="fade-item"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <b>{item.label}:</b> {item.value}
          </p>
        ))}
      </div>

      {/* <h2 style={{ marginTop: "20px" }}>Siblings Summary</h2>
      <div className="details-box">
        {siblingsSummary.map((item, index) => (
          <p
            key={index}
            className="fade-item"
            style={{ transitionDelay: `${(index + 6) * 0.1}s` }}
          >
            <b>{item.label}:</b> {item.value}
          </p>
        ))}
      </div> */}

      <h2 style={{ marginTop: "20px" }}>Brothers Details</h2>
      <div className="details-box">
        {brothersDetails.map((item, index) => (
          <p
            key={index}
            className="fade-item"
            style={{ transitionDelay: `${(index + 8) * 0.1}s` }}
          >
            <b>{item.label}:</b> {item.value}
          </p>
        ))}
      </div>

      {/* <h2 style={{ marginTop: "20px" }}>Sisters Details</h2>
      <div className="details-box">
        {sistersDetails.map((item, index) => (
          <p
            key={index}
            className="fade-item"
            style={{ transitionDelay: `${(index + 14) * 0.1}s` }}
          >
            <b>{item.label}:</b> {item.value}
          </p>
        ))}
      </div> */}
       <h2 style={{ marginTop: "20px" }}>Maternal Grand Father Details</h2>
      <div className="details-box">
        {maternalGrandFatherDetails.map((item, index) => (
          <p
            key={index}
            className="fade-item"
            style={{ transitionDelay: `${(index + 18) * 0.1}s` }}
          >
            <b>{item.label}:</b> {item.value}
          </p>
        ))}
      </div>

      <h2 style={{ marginTop: "20px" }}>Grand Father Details</h2>
      <div className="details-box">
        {grandFatherDetails.map((item, index) => (
          <p
            key={index}
            className="fade-item"
            style={{ transitionDelay: `${(index + 18) * 0.1}s` }}
          >
            <b>{item.label}:</b> {item.value}
          </p>
        ))}
      </div>

      <h2 style={{ marginTop: "20px" }}>Grand Father Sons</h2>
      <div className="details-box">
        {sonsDetails.map((item, index) => (
          <p
            key={index}
            className="fade-item"
            style={{ transitionDelay: `${(index + 20) * 0.1}s` }}
          >
            <b>{item.label}:</b> {item.value}
          </p>
        ))}
      </div>
    </section>
  );
}

export default Family;