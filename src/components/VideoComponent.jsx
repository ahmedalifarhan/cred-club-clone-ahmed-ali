// src/components/VideoComponent.js
import React from "react";
import "../styles/main.scss";

const VideoComponent = () => {
  return (
    <div className="video-container">
      <video
        playsInline
        preload="metadata"
        poster="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/multi-card/mc-fold-desktop-poster.jpg?tr=orig"
        src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/multi-card/multi-card-desktop-video.mp4?tr=q-95"
        className="video-element"
        style={{ position: "initial", visibility: "visible" }}
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default VideoComponent;
