"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";

const LeadingPageBanner = ({ title, content, bgImage, style }) => {
  useEffect(() => {
    gsap.fromTo(
      ".banner-title",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      ".banner-content",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <section>
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundImage: bgImage
            ? `url(${bgImage})`
            : `url('/images/ship-supply/banner-bg.png')`,
        }}
        className="w-full max-w-[100%] relative bg-no-repeat bg-contain"
      >
        <div
          style={{ ...style }}
          className={`absolute inset-0 ${style ? '' : 'banner-gradient'}`}
        />
        <div className="container relative text-white w-full sm:w-[90%] md:w-[80%] px-6 py-5 sm:px-9 sm:py-8 lg:w-[776px] lg:px-[68px] lg:py-[56px]">
          <h1
            className="banner-title text-[24px] z-[99] sm:text-[32px] font_franklin md:text-[40px] lg:text-[40px] font-bold leading-[36px] sm:leading-[44px] md:leading-[49px] mb-3"
          >
            {title}
          </h1>
          <p className="banner-content text-[16px] sm:text-[18px] font_calibri font-light">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadingPageBanner;
