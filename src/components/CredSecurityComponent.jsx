import React from "react";
import "../styles/main.scss";

const DataProtection = () => {
  return (
    <section className="py-8">
      <hr className="border-t border-gray-200 my-4" />
      <div className="container mx-auto px-4">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="flex items-start">
            {/* Icon */}
            <img
              src="https://web-images.credcdn.in/v2/_next/assets/images/cards/lock.png?tr=orig"
              alt="Secure Lock"
              className="w-16 h-16 mr-4"
            />
            {/* Text */}
            <h1 className="text-2xl font-bold text-gray-800">
              the only thing we do with your data is protect it.
            </h1>
          </div>

          {/* Right Section */}
          <div className="text-gray-600">
            <p className="mb-4">
              at CRED, security isn't an afterthought. it's built into
              everything we do. your data is encrypted, monitored, and protected
              at every step. we follow PCI DSS v4.0, ISO 27001, and RBI
              guidelines, ensuring top-tier safety standards. your card data is
              never stored—tokenization and masking keep your details secure.
            </p>
            <p>there are no gaps, because we didn't leave any.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataProtection;
