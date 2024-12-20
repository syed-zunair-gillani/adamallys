"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { NextArrowIcon } from "../../../public/icons";

const Main = () => {
  const slider = React.useRef(null);
  const [activeID, setActiveID] = useState(0);
  const [activeSlide, setActiveSlide] = useState();

  const handleBeforeChange = (oldIndex, newIndex) => {
    setActiveID(newIndex);
  };

  useEffect(() => {
    const activeSlide = heroSliderData?.[activeID];
    setActiveSlide(activeSlide);
  }, [activeID]);

  return (
    <main>
      <Slider {...settings} ref={slider} beforeChange={handleBeforeChange}>
        {heroSliderData?.map((item, idx) => (
          <div key={idx}>
            <div className="fullscreen-video-container">
              <video autoPlay loop muted>
                <source src={item?.link} type="video/mp4" />
              </video>

              <section className="fullscreen-video-content absolute inset-0">
                <div className="container flex flex-col justify-between mx-auto px-3 h-full pb-12">
                  <div className="opacity-0"></div>
                  <h2 className="text-2xl md:leading-[48px] lg:leading-[66px] md:text-[40px] font_franklin lg:text-[50px] text-white max-w-[1028px] uppercase font-normal">
                    Your Trusted Partner in Marine and Industrial Supplies Since
                    1972
                  </h2>
                  <div>
                    <div>
                      <p className="max-w-[377px] text-white font_calibri">
                        we have over 50 years of experience in ship supply,
                        marine logistics, and industrial supply
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
        <button onClick={() => slider?.current?.slickNext()}>
          <figure>
          </figure>
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

const heroSliderData = [
  {
    link: "https://s3-figma-videos-production-sig.figma.com/video/992398375378564435/TEAM/d220/c8bd/-d774-40f3-aab6-a7be2516f28a?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=icXMxLT8XbMSP6DusLv-rW~4d2sWKZ6nfu4qmT164~TFgc-boRUJjrWWZ9lMVdf75LZgU-YRvKb0SXFYn8cUaNMqMgOOcSYnsAHF-ZKUKhZ7EPtwgv2YOc0MC3SVYhJuOTN6Fsr5fnoWZM9sAv9EMAIZDv5zrzPTj6VeAJ0aBSAJmIKbfUp6a3icoAzBuEOqA3FPws6dgWP6DNLACr~XTfR3DFqXOX9ZKxgqE2KkSflLL-G0dcK0DZ7bUK1Vs322qYWss1z8Bt8TxeCj2z7paSxLAVK~n7aCZDy--s4rBIPi78UmcJqlvjvxQgXtxWDFPOd1jBZXBvU~Ru~SjwzTwg__",
    image:
      "https://www.businessinsider.com/icon-of-seas-worlds-largest-cruise-ship-iceberg-titanic-2023-7",
  },
  {
    link: "https://s3-figma-videos-production-sig.figma.com/video/992398375378564435/TEAM/366f/59ad/-4253-4bd8-832b-6ee3fed45c2f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dlfcMTkj6uneuah46uteRfqZH~9oTJocdCq0GtnNPxn4x1Yh~ao-nmJd28pcL8CN0ndPRV7o3O9mlF7hjb3P2Zf889iamma4zu0K6ys7b60dHy84buwSa4mBrh1YdUaJVe4lgWRXZXiXKR9GbPoJPDP-pyuQqzeLQvynlzlHHS6wBtuyEZjM7sRcBMjC0Xs3OUuGLUZWTFDcr~hw-haeA6xwwTXMMsxOeyTRtfxTQtGzAJje13v4qI7oMSGd1UC0KnBChGem9BvLINlcF0fEf0o8LczXX3ao-WssRqFhDWNHmtQC1Ly2eSD02ZF6lt-FcCKoUcWehg-HU1N6cqi3bg__",
    image:
      "https://www.sun-sentinel.com/2023/10/05/royal-caribbean-reveals-name-for-2nd-of-worlds-largest-cruise-ships/",
    },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};
