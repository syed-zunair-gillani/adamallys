"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import { CircularArrowRight } from "../../../public/icons";

const OtherServices = (props) => {
  const { Services, Image: serviceImage } = props;

  const sectionRef = useRef(null)

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
  }, [Services]);

  return (
    <section
      ref={sectionRef}
      className="certification-gradient py-12 md:py-20 mt-10 md:mt-20"
    >
      <div className="container mx-auto flex gap-10 xl:gap-24 items-center">
        <div className="w-[40%] hidden lg:block">
          <figure>
            <Image
              src={serviceImage?.data?.attributes?.url}
              alt="services-image"
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
            <div className="w-full">
              {Services?.map((item, index) => (
                <div key={index} className="flex items-center service-item mx-1 group">
                  <div className={` ${index + 1 === Services?.length ? "" : "mb-[44px]"}`}>
                    <h3 className="text-2xl md:text-[40px] text-white font_franklin md:leading-[45px]">
                      {item?.Title}
                    </h3>
                    <div className="h-[6px] bg-white w-[50px] md:w-[98px] my-5" />
                    <div className="flex justify-between items-center">
                      <p className="max-w-[560px] text-lg font_calibri text-white font-light">
                        {item?.Caption}
                      </p>
                      <Link
                        href={item?.Link}
                        className="hidden group-hover:flex !w-full justify-end md:items-center md:w-[20%]"
                      >
                        <CircularArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
