"use client";

import React, { useEffect, useRef, useState } from "react";
import "../styles/main.scss";

const ScrollableImages = ({ totalFrames, imagePath, imagePrefix }) => {
  const canvasRef = useRef(null);
  const images = useRef([]);
  const frameIndex = useRef(0);
  const sectionRef = useRef(null);
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [isSectionActive, setIsSectionActive] = useState(false);
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      let loadedCount = 0;
      for (let i = 0; i < totalFrames; i++) {
        const img = new Image();
        img.src = `${imagePath}/${imagePrefix}-${i}.jpg`;
        img.onload = () => {
          images.current[i] = img;
          loadedCount++;
          if (loadedCount === totalFrames) {
            setIsImagesLoaded(true);
            drawImage(0);
          }
        };
      }
    };
    loadImages();
  }, [imagePath, imagePrefix, totalFrames]);

  const drawImage = (index) => {
    const canvas = canvasRef.current;
    if (!canvas || !images.current[index]) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(images.current[index], 0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    const handleScroll = (event) => {
      if (!isSectionActive || isScrollEnabled) return;
      event.preventDefault();

      if (event.deltaY > 0 && frameIndex.current < totalFrames - 1) {
        frameIndex.current++;
      } else if (event.deltaY < 0 && frameIndex.current > 0) {
        frameIndex.current--;
      }
      drawImage(frameIndex.current);

      // ✅ السماح بالتمرير بعد آخر صورة أو عند الرجوع للصورة الأولى
      if (frameIndex.current === totalFrames - 1 || frameIndex.current === 0) {
        setTimeout(() => setIsScrollEnabled(true), 500);
      }
    };

    if (isSectionActive) {
      sectionRef.current.addEventListener("wheel", handleScroll, {
        passive: false,
      });
    }

    return () => {
      sectionRef.current?.removeEventListener("wheel", handleScroll);
    };
  }, [isSectionActive, isScrollEnabled]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSectionActive(true);
            setIsScrollEnabled(false); // 🔹 إيقاف التمرير عند دخول السكشن
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="scrollable-images-container">
      {isImagesLoaded ? (
        <canvas
          ref={canvasRef}
          className="scrollable-canvas"
          width={1250}
          height={720}
        />
      ) : (
        <p className="loading-text">جارِ تحميل الصور...</p>
      )}
    </section>
  );
};

export default ScrollableImages;
