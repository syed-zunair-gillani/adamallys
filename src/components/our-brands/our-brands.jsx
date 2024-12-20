"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const OurBrands = () => {
  const slider = React.useRef(null);

  return (
    <section className="my-[54px]">
      <div className="container mx-auto px-3">
        <div className="flex justify-between items-center">
          <h3 className="text-[30px] text-theme-main font-bold">
            Our Brands
            <div className="w-10 h-[1px] bg-theme-main" />
          </h3>
          <div className="flex items-center gap-2">
            <Image
              src="/svg/arrow_circle_left.svg"
              alt=""
              className="cursor-pointer"
              width={40}
              height={40}
              onClick={() => slider?.current?.slickPrev()}
            />
            <Image
              src="/svg/arrow_circle_right.svg"
              alt=""
              className="cursor-pointer"
              width={40}
              height={40}
              onClick={() => slider?.current?.slickNext()}
            />
          </div>
        </div>
        <p className="font-light mt-3">
          Adamallys is the authorized distributor or stockist reseller for
          numerous premium brands used in the marine and industrial sectors.
          Elevate your operations with reliable, immediate access to the UAE's
          most extensive range of top-quality marine stores, ensuring you
          receive only the best in performance and durability.
        </p>
        <Slider ref={slider} {...settings}>
          {[1, 2, 3]?.map((icon, id) => (
            <div className="!grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7" key={id}>
              {[1, 2, 3, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, idx) => (
                <div key={idx} className="flex justify-center">
                  <Image
                    src="/images/icon.png"
                    alt="image"
                    width={165}
                    height={165}
                  />
                </div>
              ))}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurBrands;

var settings = {
  dots: false,
  infinite: false,
  arrows: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
