import React from "react";
import "../styles/main.scss";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* النصوص الرئيسية */}
      <div className="hero-content">
        <p className="subheading">CREDIT CARD MANAGEMENT. REIMAGINED.</p>
        <h1 className="main-heading">
          everything you need. <span>nothing you don’t.</span>
        </h1>
        <p className="subheading">
          welcome to a credit card experience designed to feel like second
          nature. like muscle memory. life's logistics demand enough of your
          time, effort, and attention—managing your credit cards shouldn't add
          to the list.
        </p>
        <p className="subheading">
          you can put your admin duties to rest. for good.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
