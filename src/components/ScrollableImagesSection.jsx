import React, { useState, useEffect } from "react";
import "../styles/main.scss";

const ScrollableImagesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = 150;

  // Create an array of image URLs (from 0 to 149)
  const imageUrls = Array.from(
    { length: totalImages },
    (_, i) =>
      `https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/unbilled/seq_v3/unbilled-${i}.jpg`
  );

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  // Handle the scroll to change the image index
  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 3, totalImages - 1));
    } else {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  // Disable scroll when in the section
  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("image-scroll-section");
      const rect = section.getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        disableScroll();
      } else {
        enableScroll();
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentIndex]);

  return (
    <section id="image-scroll-section" className="scrollable-images-section">
      <div className="image-container">
        <img
          src={imageUrls[currentIndex]}
          alt={`Image ${currentIndex}`}
          className={`scrollable-image ${
            currentIndex === 0 ? "image-visible" : ""
          }`}
        />
      </div>
    </section>
  );
};

export default ScrollableImagesSection;
