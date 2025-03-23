import React from "react";
import "../styles/main.scss";
import Footer from "../components/Footer";
import VideoComponent from "../components/VideoComponent";
import VideoSection from "../components/VideoSection";
import FullScreenVideoSection from "../components/FullScreenVideoSection";
import BackgroundVideo from "../components/BackgroundVideo";
import HeroSection from "../components/HeroSection";
import ScrollableImages from "../components/ScrollableImages";

const HomePage = () => {
  return (
    <div className="homepage">
      <BackgroundVideo />
      <HeroSection />

      <VideoComponent />
      {/* <ImageScrollerSection /> */}
      {/* <ScrollableImages /> */}

      <section className="full-screen-section">
        <ScrollableImages
          totalFrames={150}
          imagePath="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/unbilled/seq_v3"
          imagePrefix="unbilled"
        />
      </section>
      <FullScreenVideoSection />
      <VideoSection />
      {/* Data Protection Section */}
      <section className="full-screen-section">
        <ScrollableImages
          totalFrames={195}
          imagePath="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/smart-statements/ss_seq"
          imagePrefix="ss"
        />
      </section>
      <section className="full-screen-section">
        <ScrollableImages
          totalFrames={339}
          imagePath="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/perks/seq_v2"
          imagePrefix="perks"
        />
      </section>
      <section className="data-protection">
        <hr className="divider" />
        <div className="container">
          <div className="left-section">
            <img
              src="https://web-images.credcdn.in/v2/_next/assets/images/cards/lock.png?tr=orig"
              alt="Secure Lock"
              className="icon"
            />
            <h1 className="title">
              the only thing we do with your data is protect it.
            </h1>
          </div>

          <div className="right-section">
            <p className="text">
              at CRED, security isn't an afterthought. it's built into
              everything we do. your data is encrypted, monitored, and protected
              at every step. we follow PCI DSS v4.0, ISO 27001, and RBI
              guidelines, ensuring top-tier safety standards. your card data is
              never stored—tokenization and masking keep your details secure.
            </p>
            <p className="text">
              there are no gaps, because we didn't leave any.
            </p>
          </div>
        </div>
      </section>

      {/* Power Section */}
      <section className="power-section">
        <div className="container">
          <h1 className="title">absolute power</h1>
          <h2 className="subtitle">can be yours.</h2>
          <p className="description">
            this is what credit card management should have been all along.
            <br />
            your cards and your time will finally work in your favor.
          </p>
          <button className="download-button">Download</button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
