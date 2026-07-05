import React, { useEffect, useRef, useState } from "react";
import image from "../assets/image.JPG";
function ProfileCard() {
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

const profileData = {
  name: "MD Faizanuzzaman",
  profession: "Government Teacher",
  image: image,
};

  const profileDetails = [
    { label: "Age", value: "28 Years" },
    { label: "Height", value: `5'8"` },
    { label: "Religion", value: "Islam" },
    { label: "Caste", value: "Shaikh" },
    { label: "Marital Status", value: "Unmarried" },
    { label: "Location", value: "Samastipur, Bihar" },
  ];

  return (
    <section
      ref={sectionRef}
      className={`profile-card fade-section ${show ? "show" : ""}`}
    >
      <div className="profile-img fade-item" style={{ transitionDelay: "0.1s" }}>
        <img src={profileData.image} alt="profile" />
      </div>

      <div className="profile-info">
        <h2 className="fade-item" style={{ transitionDelay: "0.2s" }}>
          {profileData.name}
        </h2>

        <p className="fade-item" style={{ transitionDelay: "0.3s" }}>
          {profileData.profession}
        </p>

        <div className="profile-grid">
          {profileDetails.map((item, index) => (
            <p
              key={index}
              className="fade-item"
              style={{ transitionDelay: `${(index + 4) * 0.1}s` }}
            >
              <b>{item.label}:</b> {item.value}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;