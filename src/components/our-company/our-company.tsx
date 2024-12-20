import React from "react";

const OurCompany = () => {
  return (
    <section className="">
      <div className="container py-20 mx-auto px-3 flex md:flex-row gap-6 flex-col">
        <div className="md:w-[25%]">
          <h3 className="text-theme-main font-bold font_calibri uppercase text-[30px]">
            Our Company
            <div className="w-10 mt-2 h-[1px] bg-theme-main" />
          </h3>
        </div>
        <div className="md:w-[75%]">
          <div className="oc_content font_calibri">
            <h2 className="font_franklin">
              Adamallys LLC is one of the leading ship chandlers in the UAE and
              Middle East region.
            </h2>
            <p className="!text-xl">
              With over 50 years of experience in the UAE, Adamallys LLC is
              dedicated to sourcing and delivering high-quality technical marine
              stores and provisions with a focus on cost-efficiency,
              reliability, and complete order fulfillment. Our extensive
              expertise encompasses the supply of ship stores for all vessel
              types across UAE ports and neighboring countries. Our commitment
              to quality and service has earned us the trust of leading ship
              owners and managers worldwide. Recognized as a key partner for
              regional ports, the offshore oil & gas sector, and various
              industrial fields, we offer a diverse product range and robust
              logistics capabilities to ensure dependable and efficient support
              for all maritime and industrial needs.
            </p>
            <p>
              At Adamallys LLC, the health and safety of seafarers and crew
              members are at the heart of everything we do. We are dedicated to
              supplying marine-grade products built for durability and
              reliability, ensuring they withstand the harshest conditions at
              sea. Our commitment to quality extends to every item we supply,
              guaranteeing that products are accurately sourced, rigorously
              tested, and fit for purpose, so that vessel operations run
              smoothly and efficiently. By prioritizing the well-being of those
              on board, we strive to provide peace of mind, knowing that they
              have dependable support and supplies on every voyage.
            </p>
            <p>
              As a proud IMPA SAVE and IMPA Maritime Environmental Footprint
              (IMEF) Initiative pledge member, Adamallys is committed to
              advancing sustainability initiatives. Our mission to reduce our
              carbon footprint includes leveraging solar energy to power our
              facilities, promoting boxed water and advanced water filtration
              systems, adopting biodegradable packaging, and implementing
              energy-efficient lighting across our distribution centers. We are
              dedicated to a sustainable future, working alongside our partners
              to bring about greener practices and environmental stewardship for
              a brighter tomorrow.
            </p>
            <button className="flex items-center font_calibri gap-10 text-theme-main mt-6">
              <span>Read More</span>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <mask
                  id="mask0_42_1450"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="17"
                  height="17"
                >
                  <rect width="16.1863" height="16.1863" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_42_1450)">
                  <path
                    d="M5.39553 14.2305L4.82227 13.6572L10.3863 8.09316L4.82227 2.52911L5.39553 1.95584L11.5329 8.09316L5.39553 14.2305Z"
                    fill="#2E368F"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCompany;
