import React from "react";
import {renderRichText} from "@/components/renderRichText"

const OurCompany = ({data}) => {
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
            
          <div>{renderRichText(data)}</div>

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



