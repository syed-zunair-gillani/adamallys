"use client"
import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  className: "center",
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
};

const News = ({ data }) => {
  const slider = React.useRef(null)


  return (
    <section className='pl-3 md:pl-10 lg:pl-20 bg-[#FFFFFF] py-20 z-[50] relative'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-[25%]'>
          <h3 className="text-[30px] text-theme-main font-bold font_calibri">
            News
            <div className="w-10 h-[1px] bg-theme-main" />
          </h3>
        </div>
        <div className='md:w-[75%] centermodeRight font_franklin'>
          <div className='flex justify-between mb-14 items-center pr-3 md:pr-10 lg:pr-20'>
            <h3 className='text-[30px] font-bold font_franklin'>News & Events</h3>
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
        </div>
      </div>
      <Slider ref={slider} {...settings}>
        {
          data?.data?.map((item, idx) => {
            const date = new Date(item?.attributes?.createdAt);
            const options = { day: '2-digit', month: 'long', year: 'numeric' };
            const formattedDate = date.toLocaleDateString('en-GB', options);

            return (
              <div key={idx} className='pr-3 md:pr-6'>
                <figure>
                  <Image src={item?.attributes?.Image?.data?.attributes?.url} alt='' className='w-full' width={434} height={293} />
                </figure>
                <div className='bg-theme-gray p-5 md:p-10 font_calibri'>
                  <h6 className='text-theme-main'>{formattedDate}</h6>
                  <p className='text-[#8B8B8B] text-[17px] sm:text-[20px] md:text-[25px] font-light mt-3'>{item?.attributes?.Excerpt}</p>
                  <button className={`flex items-center gap-10 mt-5 text-theme-main`}>
                    Read More
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <mask id="mask0_42_1540" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="17">
                        <rect width="16.1863" height="16.1863" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_42_1540)">
                        <path d="M5.39553 14.2305L4.82227 13.6572L10.3863 8.09313L4.82227 2.52908L5.39553 1.95581L11.5329 8.09313L5.39553 14.2305Z" fill={"#2E368F"} />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </section>
  )
}

export default News
