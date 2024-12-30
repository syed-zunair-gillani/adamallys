"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const OurBrands = ({data, content}) => {
  const slider = React.useRef(null);
 
  return (
    <section className="my-[54px]">
      <div className="container mx-auto px-3">
        <div className="flex justify-between items-center">
          <h3 className="text-[30px] text-theme-main font_calibri font-bold">
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
        <p className="font-light mt-3 font_calibri">
          {content}
        </p>
        <Slider ref={slider} {...settings}>
          {data?.map((icon, id) => (
            <div className="!grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7" key={id}>
              {icon?.Icon?.data?.map((item, idx) => (
                <div key={idx} className="flex justify-center">
                  <Image
                    src={item?.attributes?.url}
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
