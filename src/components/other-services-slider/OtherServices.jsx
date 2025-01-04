"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { gsap } from "gsap";
import { otherServicesData } from "@/consts/shipSupply";
import { CircularArrowRight } from "../../../public/icons";
import { getOtherService } from "@/services";


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
};

const OtherServices = () => {
  const slider = useRef(null);
  const sectionRef = useRef(null);
  const [services, setServices] = useState();

  useEffect(() => {
    (async () => {
      const res = await getOtherService();
      const chunkedArray = chunkArray(res?.OtherServices, 2);

      setServices({
        image: res?.Image?.data?.attributes?.url,
        services: chunkedArray,
      });
    })();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the heading
      gsap.fromTo(
        ".other-services-heading",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Animate the services content
      gsap.fromTo(
        ".service-item",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [services]);

  function chunkArray(array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }

  return (
    <section
      ref={sectionRef}
      className="certification-gradient py-12 md:py-20 mt-10 md:mt-20"
    >
      <div className="container mx-auto px-3 flex gap-10 xl:gap-24 items-center">
        <div className="w-[40%] hidden lg:block">
          <figure>
            <Image
              src={services?.image}
              alt=""
              width={530}
              className="w-full h-full object-cover"
              height={670}
            />
          </figure>
        </div>
        <div className="w-full lg:w-[60%]">
          <h2 className="other-services-heading text-4xl md:text-5xl lg:text-6xl font_calibri text-white font-bold">
            Other Services
          </h2>
          <div className="w-full h-[1px] bg-gray-500 my-10" />
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-[80%]">
              <Slider ref={slider} {...settings}>
                {services?.services?.map((chunk, chunkIndex) => (
                  <div key={chunkIndex}>
                    {chunk?.map((item, index) => (
                      <div
                        key={index}
                        className="service-item mx-1"
                      >
                        <div
                          className={`max-w-[560px] ${
                            index + 1 === otherServicesData?.length
                              ? ""
                              : "mb-[44px]"
                          }`}
                        >
                          <h3 className="text-2xl md:text-[40px] text-white font_franklin md:leading-[45px]">
                            {item?.title}
                          </h3>
                          <div className="h-[6px] bg-white w-[50px] md:w-[98px] my-5" />
                          <p className="text-lg font_calibri text-white font-light">
                            {item?.info}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </Slider>
            </div>
            <button
              onClick={() => slider?.current?.slickNext()}
              className="!w-full flex justify-end md:items-center md:w-[20%]"
            >
              <CircularArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
