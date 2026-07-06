import React, { useEffect, useRef, useState } from "react";

function Footer() {
  const footerRef = useRef(null);
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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  const contactDetails = [
    { label: "Mobile", value: "+91 6207153799" },
    { label: "WhatsApp", value: "+91 7296083183" },
    { label: "Email", value: "xxxxxx@gmail.com" },
    { label: "Address", value: "Balbhaddrapur, Samastipur, Bihar, 848132" },
  ];

  return (
    <footer ref={footerRef} className={`footer fade-section ${show ? "show" : ""}`}>
      <h2 className="fade-item" style={{ transitionDelay: "0.1s" }}>
        Contact Details
      </h2>

      {contactDetails.map((item, index) => (
        <p
          key={index}
          className="fade-item"
          style={{ transitionDelay: `${(index + 2) * 0.1}s` }}
        >
          <b>{item.label}:</b> {item.value}
        </p>
      ))}
    </footer>
  );
}

export default Footer;