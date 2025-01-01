"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useEffect, useState } from 'react';

const Cards = ({ dark, data }) => {

  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const [remainingHeight, setRemainingHeight] = useState(0);
  console.log("🚀 ~ Cards ~ remainingHeight:", remainingHeight)

  const calculateRemainingHeight = () => {
    const topOffset = topRef.current ? topRef.current.getBoundingClientRect().bottom : 0;
    const bottomOffset = bottomRef.current ? bottomRef.current.getBoundingClientRect().top : 0;
    const windowHeight = window.innerHeight;
    const remaining = windowHeight - (topOffset + (windowHeight - bottomOffset));
    setRemainingHeight(remaining);
  };

  useEffect(() => {
    calculateRemainingHeight();
    window.addEventListener('scroll', calculateRemainingHeight);
    return () => {
      window.removeEventListener('scroll', calculateRemainingHeight);
    };
  }, []);


  return (
    <section className={`grid md:grid-cols-2 mt-60 `}>
      <div>
        <Image
          src={data[0]?.Image?.data?.[0]?.attributes?.url}
          alt=''
          width={720}
          height={720}
          className='w-full sticky top-20 object-cover h-[400px] md:h-[720px] -mt-52'
        />
        <Image
          src={data[1]?.Image?.data?.[0]?.attributes?.url}
          alt=''
          width={720}
          height={720}
          className='w-full sticky top-40 object-cover h-[400px] md:h-[720px] -mt-52'
        />
      </div>
      <div >
        <div
          className={`h-[720px] px-4 sticky top-20 sm:px-10 md:px-16 flex justify-center flex-col items-center  ${dark ? 'bg-black text-white' : 'bg-[#F5F6F8] text-[#2E368F]'
          }`}
        >
          <div className='max-w-[435px] mx-auto'>
            <h3 className='text-[40px] mb-4 font_franklin'>{data[0]?.title}</h3>
            <div>
              {data[0]?.sub_title && (
                <h6 className={`text-xl mb-2 ${dark ? 'text-white' : 'text-theme-main'}`}>
                  {data[0]?.sub_title}
                </h6>
              )}
              <p className={`text-light ${dark ? 'text-white' : 'text-theme-main'}`}>{data[0]?.Caption}</p>
            </div>
            <Link href={data[0]?.link || '#'}>
              <button
                className={`font_calibri border flex items-center gap-10 mt-10 py-[14px] px-[18px] ${dark ? 'border-white' : 'border-[#2E368F]'
                  }`}
              >
                Read More
                <svg width='17' height='17' viewBox='0 0 17 17' fill='none'>
                  <mask id='mask0_42_1540' maskUnits='userSpaceOnUse' x='0' y='0' width='17' height='17'>
                    <rect width='16.1863' height='16.1863' fill='#D9D9D9' />
                  </mask>
                  <g mask='url(#mask0_42_1540)'>
                    <path
                      d='M5.39553 14.2305L4.82227 13.6572L10.3863 8.09313L4.82227 2.52908L5.39553 1.95581L11.5329 8.09313L5.39553 14.2305Z'
                      fill={`${dark ? 'white' : '#2E368F'}`}
                    />
                  </g>
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div
          className={`h-[720px] sticky top-40 px-4 sm:px-10 md:px-16 flex justify-center flex-col items-center  ${dark ? 'bg-black text-white' : 'bg-[#F5F6F8] text-[#2E368F]'
            }`}
            ref={topRef}
        >
          <div className='max-w-[435px] mx-auto'>
            <h3 className='text-[40px] mb-4 font_franklin'>{data[1]?.title}</h3>
            <div>
              {data[1]?.sub_title && (
                <h6 className={`text-xl mb-2 ${dark ? 'text-white' : 'text-theme-main'}`}>
                  {data[1]?.sub_title}
                </h6>
              )}
              <p className={`text-light ${dark ? 'text-white' : 'text-theme-main'}`}>{data[1]?.Caption}</p>
            </div>
            <Link href={data[1]?.link || '#'}>
              <button
                className={`font_calibri border flex items-center gap-10 mt-10 py-[14px] px-[18px] ${dark ? 'border-white' : 'border-[#2E368F]'
                  }`}
              >
                Read More
                <svg width='17' height='17' viewBox='0 0 17 17' fill='none'>
                  <mask id='mask0_42_1540' maskUnits='userSpaceOnUse' x='0' y='0' width='17' height='17'>
                    <rect width='16.1863' height='16.1863' fill='#D9D9D9' />
                  </mask>
                  <g mask='url(#mask0_42_1540)'>
                    <path
                      d='M5.39553 14.2305L4.82227 13.6572L10.3863 8.09313L4.82227 2.52908L5.39553 1.95581L11.5329 8.09313L5.39553 14.2305Z'
                      fill={`${dark ? 'white' : '#2E368F'}`}
                    />
                  </g>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
