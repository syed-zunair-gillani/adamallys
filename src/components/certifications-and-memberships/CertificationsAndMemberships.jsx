"use client"
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const CertificationsAndMemberships = ({data}) => {
  const imageRefs = useRef([]);
  const imageRefs2 = useRef([]);
  useEffect(() => {
    imageRefs.current = imageRefs.current.slice(0, data?.length || 0);

    gsap.fromTo(
      imageRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: imageRefs.current,
          start: 'top 80%', // Trigger when images are in view
          end: 'bottom 20%',
          // toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      imageRefs2.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: imageRefs2.current,
          start: 'top 80%', // Trigger when images are in view
          end: 'bottom 20%',
          // toggleActions: 'play none none reverse',
        },
      }
    );
  }, [data]);


  return (
    <section className="certification-gradient -mt-[6px]">
      <div className="container mx-auto px-3 py-16">
        <h4 className="text-xl md:text-2xl text-white font_calibri mb-10">
            Certifications & Memberships
          <div className="h-[2px] w-[34px] bg-white mt-2" />
        </h4>
        <div className="flex justify-center gap-2 lg:justify-between items-center flex-wrap">
      {data?.slice(0, 6).map((item, idx) => (
        <React.Fragment key={idx}>
          <figure
            className="flex justify-center w-[162px] h-[162px]"
            ref={(el) => (imageRefs.current[idx] = el)} // Add ref to each image container
          >
            <img
              src={item?.Icon?.data?.attributes?.url}
              alt=""
              className="w-[110px] md:w-[140px] lg:w-[162px] object-contain"
            />
          </figure>
        </React.Fragment>
      ))}
    </div>
        <div className="h-[1px] w-full bg-[#5860BC] my-5"/>
        <div className="flex justify-center gap-2 lg:justify-between items-center flex-wrap">
          {data?.slice(6,12).map(
            (item, idx) => (
              <React.Fragment key={idx}>
                <figure className="flex justify-center w-[162px] h-[162px]" ref={(el) => (imageRefs2.current[idx] = el)}>
                  <img src={item?.Icon?.data?.attributes?.url} alt="" className="w-[110px] md:w-[140px] lg:w-[162px] object-contain" />
                </figure>
              </React.Fragment>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CertificationsAndMemberships;
