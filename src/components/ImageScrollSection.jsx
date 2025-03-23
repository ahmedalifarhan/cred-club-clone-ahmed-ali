"use client";

import { useState, useEffect } from "react";
import "../styles/main.scss"; // استيراد ملف الـ SASS الرئيسي

const ImageScrollerSection = () => {
  const totalFrames = 195; // عدد الصور
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // موضع التمرير الرأسي
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      // حساب الفريم بناءً على نسبة التمرير
      const index = Math.min(
        totalFrames - 1,
        Math.floor((scrollY / maxScroll) * totalFrames)
      );

      setFrameIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageUrl = `https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/smart-statements/ss_seq/ss-${frameIndex}.jpg?tr=orig`;

  return (
    <section className="scroller">
      <img
        src={imageUrl}
        alt={`Frame ${frameIndex}`}
        className="scroller__image"
      />
    </section>
  );
};

export default ImageScrollerSection;
