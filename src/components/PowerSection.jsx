import React from "react";

const PowerSection = () => {
  return (
    <section className="power-section py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h1 className="title text-4xl font-bold text-gray-800 mb-4">
          absolute power
        </h1>
        {/* Subtitle */}
        <h2 className="subtitle text-2xl text-gray-600 mb-8">can be yours.</h2>
        {/* Description */}
        <p className="description text-gray-600 text-lg mb-8">
          this is what credit card management should have been all along. your
          cards and your time will finally work in your favor.
        </p>
        {/* Download Button */}
        <button className="download-button bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Download
        </button>
      </div>
    </section>
  );
};

export default PowerSection;
