import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = ({data}) => {
  return (
    <section className="">
      <div className="container pb-20 pt-5 mx-auto px-3 gap-3 flex md:flex-row flex-col">
        <div className="md:w-[25%]">
          <h3 className="text-theme-main font-bold font_calibri uppercase text-[30px]">
            What we do
            <div className="w-10 mt-2 h-[1px] bg-theme-main" />
          </h3>
        </div>
        <div className="md:w-[75%] mt-5 md:mt-0">
            <h2 className="text-[40px] mb-10 -mt-[6px] font_franklin">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-[14px]">
            {data?.map((item, idx) => {
              const fullWidthItems = [2, 3, 5, 6, 7]; // Items requiring 100% width
              const isFullWidth = fullWidthItems.includes(item); // Check dynamically
              return (
                <div
                  key={idx}
                  className={`relative ${
                    isFullWidth
                      ? "w-full object-cover sm:col-span-2 lg:col-span-3"
                      : "h-[378px] object-cover sm:col-span-2 lg:col-span-2"
                  }`}
                >
                  <Image
                    src="/images/s2.png"
                    alt=""
                    width={573}
                    height={378}
                    className={`h-[378px] object-cover w-full`}
                  />
                  <div className="absolute px-9 gap-3 flex justify-between w-full items-center bottom-9 ">
                    <Link href="#" className="text-white text-[30px] font-bold font_calibri">
                      Ship Supply
                    </Link>
                    <Image
                      src="/svg/service-arrow.svg"
                      alt=""
                      width={43}
                      height={43}
                      className={``}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
