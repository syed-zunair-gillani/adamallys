"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Slider from "react-slick";
import { useGSAP } from "@gsap/react";
import { NextArrowIcon } from "../../../public/icons";

const Main = ({ data }) => {
  const slider = React.useRef(null);
  const [activeID, setActiveID] = useState(0);
  const [activeSlide, setActiveSlide] = useState();

  const handleBeforeChange = (oldIndex, newIndex) => {
    setActiveID(newIndex);
  };

  useEffect(() => {
    const activeSlide = data?.[activeID];
    setActiveSlide(activeSlide);
  }, [activeID]);

  useGSAP(() => {
    gsap.from(".slideFade", {
      y: 20,
      opacity: 0,
      duration: 1,
    })
  })

  return (
    <main>
      <Slider {...settings} ref={slider} beforeChange={handleBeforeChange} >
        {data?.map((item, idx) => (
          <div key={idx}>
            <div className="fullscreen-video-container">
              <video autoPlay loop muted>
                <source src={item?.video?.data?.attributes?.url} type="video/mp4" />
              </video>

              <section className="fullscreen-video-content absolute inset-0">
                <div className="container flex flex-col justify-between mx-auto px-3 h-full pb-12">
                  <div className="opacity-0"></div>
                  <h2 className="text-2xl slideFade md:leading-[48px] lg:leading-[66px] md:text-[40px] font_franklin lg:text-[50px] text-white max-w-[1028px] uppercase font-normal">
                    {item?.title}
                  </h2>
                  <div>
                    <div className="slideFade">
                      <p className="max-w-[377px] text-white font_calibri">
                        {item?.sub_title}
                      </p>
                      <div className="h-[2px] w-[34px] bg-white mt-2" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        ))}
      </Slider>
      <div className="container mx-auto absolute right-1/2 bottom-32 sm:bottom-14 translate-x-1/2 flex justify-end px-6">
        <figure className="mr-2">
          <Image src={activeSlide?.NextButtonImage.data?.attributes.url} alt="next-image" width={124} height={64} />
        </figure>
        <button onClick={() => slider?.current?.slickNext()}>
          <div>
            <h6 className="text-lg text-white font_calibri">Next</h6>
            <NextArrowIcon />
          </div>
        </button>
      </div>
    </main>
  );
};

export default Main;


const settings = {
  speed: 500,
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  autoplaySpeed: 5000,
  cssEase: 'ease-in-out'
};
