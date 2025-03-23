// src/components/BackgroundVideo.js
import React from "react";
import "../styles/main.scss";
import Navbar from "./Navbar";
const BackgroundVideo = () => {
  return (
    <div className="video-background">
      <Navbar />
      <video
        playsInline
        preload="metadata"
        poster="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/hero-fold/hero-fold-desktop-poster.jpg?tr=orig"
        src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/hero-fold/hero-fold-desktop-video.mp4?tr=q-95"
        className="hero-video"
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default BackgroundVideo;
