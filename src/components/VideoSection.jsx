// src/components/VideoSection.js
import React from "react";
import "../styles/main.scss"; // Ensure your styles are linked correctly

const VideoSection = () => {
  return (
    <div className="video-section ">
      {/* Main Heading */}
      <h1 className="main-heading">
        every touch is <br /> pure power.
      </h1>

      {/* First Video Section */}
      <div className="video-container">
        <video
          playsInline
          poster="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/interactions/swipe-fallback.jpg?tr=orig"
          className="video-element"
          loop
          autoPlay
          muted
        >
          <source
            src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/interactions/swipe.mp4?tr=q-95"
            type="video/mp4"
          />
        </video>
        <div className="video-description">
          <img
            src="https://web-images.credcdn.in/v2/_next/assets/images/cards/swipe-left.png?tr=orig"
            alt="Swipe Left"
            className="action-image"
          />
          <div className="text-description">
            <p className="action-heading">
              SWIPE LEFT
              <span className="subheading">
                on any card to manage payment history, card offers, and more.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Second Video Section */}
      <div className="video-container">
        <video
          playsInline
          poster="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/interactions/long-press-fallback.jpg?tr=orig"
          className="video-element"
          loop
          autoPlay
          muted
        >
          <source
            src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/interactions/long-press.mp4?tr=q-95"
            type="video/mp4"
          />
        </video>
        <div className="video-description">
          <img
            src="https://web-images.credcdn.in/v2/_next/assets/images/cards/tap-hold.png?tr=orig"
            alt="Press and Hold"
            className="action-image"
          />
          <div className="text-description">
            <p className="action-heading">
              PRESS AND HOLD
              <span className="subheading">
                a card to view balances, usage limits, recent activity, and
                other key details.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Third Video Section */}
      <div className="video-container">
        <video
          playsInline
          poster="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/interactions/smart-nav-fallback.jpg?tr=orig"
          className="video-element"
          loop
          autoPlay
          muted
        >
          <source
            src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/interactions/smart-nav.mp4?tr=q-95"
            type="video/mp4"
          />
        </video>
        <div className="video-description">
          <img
            src="https://web-images.credcdn.in/v2/_next/assets/images/cards/smart-nav.png?tr=orig"
            alt="Smart Navigation"
            className="action-image"
          />
          <div className="text-description">
            <p className="action-heading">
              SMART NAVIGATION
              <span className="subheading">
                makes switching between cards seamless.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
