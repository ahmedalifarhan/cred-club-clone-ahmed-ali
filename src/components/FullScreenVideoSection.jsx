import React from "react";
import "../styles/main.scss"; // تأكد من ربط ملف SCSS بشكل صحيح

const FullScreenVideoSection = () => {
  return (
    <section className="fullscreen-video-section">
      <video
        playsInline
        preload="metadata"
        poster="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/single-card/single-card-fold-desktop-poster.jpg?tr=orig"
        src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/single-card/single-card.mp4?tr=q-95"
        className="fullscreen-video"
        autoPlay
        muted
        loop
      />
    </section>
  );
};

export default FullScreenVideoSection;
