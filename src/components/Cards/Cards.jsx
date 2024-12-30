import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cards = ({ dark, data }) => {
  return (
    <section className='grid md:grid-cols-2 mt-60'>
      <div>
        <Image src={data?.Image?.data?.[0]?.attributes?.url} alt='' width={720} height={720} className='w-full object-cover h-[400px] md:h-[720px] -mt-52' />
      </div>
      <div>
        <div className={`h-[720px] px-4 sm:px-10 md:px-16 flex justify-center flex-col items-center  ${dark ? "bg-black text-white" : "bg-[#F5F6F8] text-[#2E368F]"}`} >
          <div className='max-w-[435px] mx-auto'>
            <h3 className='text-[40px] mb-4 font_franklin'>{data?.title}</h3>
            <p className='font-light font_calibri text-white'>{renderRichText(data?.Content, dark)}</p>
            <Link href={data?.link || "#"}>
              <button className={`font_calibri border flex items-center gap-10 mt-10 py-[14px] px-[18px] ${dark ? "border-white" : "border-[#2E368F]"}`}>
                Read More
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <mask id="mask0_42_1540" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="17">
                    <rect width="16.1863" height="16.1863" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_42_1540)">
                    <path d="M5.39553 14.2305L4.82227 13.6572L10.3863 8.09313L4.82227 2.52908L5.39553 1.95581L11.5329 8.09313L5.39553 14.2305Z" fill={`${dark ? "white" : "#2E368F"}`} />
                  </g>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards

const renderRichText = (blocks, dark) => {
  return blocks.map((block, index) => {
    const { type, level, children } = block;

    // Render based on block type
    switch (type) {
      case "heading":
        const HeadingTag = `h${level}`; // Dynamically determine heading level
        if (HeadingTag === "h3") {
          return (
            <h3 key={index} className="mb-3 text-xl">
              {children.map((child, childIndex) => child.text)}
            </h3>
          );
        }
      case "paragraph":
        return (
          <p key={index} className={`font-light ${dark ? "text-white" : "text-[#2E368F]"}`}>
            {children.map((child, childIndex) => child.text)}
          </p>
        );

      default:
        return null; // Handle other block types as needed
    }
  });
};
