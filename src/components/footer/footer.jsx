import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getFooter } from "@/services";

const pagesGroup = [
  {
    link: '/about',
    label: 'Who we are'
  },
  {
    link: '/products-&-services',
    label: 'Product & Services'
  },
  {
    link: '#',
    label: 'Distribution & Stockists'
  },
  {
    link: '/technical-marine-stores',
    label: 'Ship Supply'
  },
  {
    link: '/news-&-events',
    label: 'News'
  },
  {
    link: '#',
    label: 'Contact'
  },
]

const Footer = async () => {
  const data = await getFooter()
  console.log("🚀 ~ Footer ~ data:", data)
  const {About,Logo, Adamallys_Group, AdamallysGroup2, AdamallysLLC, AdamallysMarineShipChandlingServices} = data
  return (
    <footer className="footer_gradient pt-[63px]">
      <section className="grid container mx-auto px-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-10 lg:gap-[88px]">
        <div>
          <Link href="/" className="">
            <Image
              src={Logo?.data?.attributes?.url}
              alt="logo"
              width={126}
              height={74}
              className="w-[126px]"
            />
          </Link>
          <p className="font_calibri font-light mt-4 text-theme-main">
            {About}
          </p>
        </div>
        <div>
          <h6 className="font_calibri uppercase text-lg font-bold text-theme-main">Adamallys Group</h6>
          <ul className="mt-[13px]">
            {
              Adamallys_Group?.map((item, idx) => (
                <li key={idx} className="text-[#3E3E3E] font_calibri mb-2 font-light">
                  <Link href={item.Link}>
                    {item.Label}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <h6 className="font_calibri uppercase text-lg font-bold text-theme-main">Adamallys Group</h6>
          <ul className="mt-[13px]">
            <li className="text-[#3E3E3E] font_calibri mb-2 font-light">
              Address:<br />
              {AdamallysGroup2?.address}
            </li>
            <li className="text-[#3E3E3E] font_calibri mb-2 font-light">
              Contact Details:<br />
              <span>Tel: {AdamallysGroup2?.Telephone}</span><br />
              <span>Fax: {AdamallysGroup2?.Fax}</span>
            </li>
            <li className="text-[#3E3E3E] font_calibri mb-2 font-light">
              Email:<br />
              {AdamallysGroup2?.Email}
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font_calibri uppercase text-lg font-bold text-theme-main">Adamallys LLC</h6>
          <ul className="mt-[13px]">
            <li className="text-[#3E3E3E] font_calibri mb-2 font-light">
              Location: <br />
              <span>{AdamallysLLC?.Location}</span>
            </li>
            <li className="text-[#3E3E3E] font_calibri mb-2 font-light">
              Contact Details:<br />
              <span>Tel: {AdamallysLLC?.Telephone}</span><br />
              <span>Fax: {AdamallysLLC?.Fax}</span>
            </li>
            <li className="text-[#3E3E3E] font_calibri mb-2 font-light">
              Email:<br />
              {AdamallysLLC?.Email}
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font_calibri uppercase text-lg font-bold text-theme-main">Adamallys Marine
            Ship chandling services</h6>
          <ul className="mt-[13px]">
            <li className="text-[#3E3E3E] font_calibri mb-2 font-light">
              Location: <br />
              <span>{AdamallysMarineShipChandlingServices?.Location}</span>
            </li>
            <li className="text-[#3E3E3E] font_calibri mb-2 font-light">
              Contact Details:<br />
              <span>Tel: {AdamallysMarineShipChandlingServices?.Telephone}</span><br />
              <span>Fax: {AdamallysMarineShipChandlingServices?.Fax}</span>
            </li>
            <li className="text-[#3E3E3E] font_calibri mb-2 font-light">
              Email:<br />
              {AdamallysMarineShipChandlingServices?.Email}
            </li>
          </ul>
        </div>
      </section>

      <section className="flex justify-center container mx-auto px-3 flex-wrap mb-[66px] mt-[23px] items-center gap-2 sm:gap-4 font_calibri text-theme-main">
        <button className="py-[6px] px-4 sm:px-[30px] border border-theme-main leading-[32px] rounded-full">TradeNet ID: 59590</button>
        <button className="py-[6px] px-4 sm:px-[30px] border border-theme-main leading-[32px] rounded-full">MESPAS ID: SSM-N3X</button>
        <button className="py-[6px] px-4 sm:px-[30px] border border-theme-main leading-[32px] rounded-full">ProcureShip ID: 440</button>
      </section>
      <section className=" flex flex-col sm:flex-row gap-5 justify-between items-center container mx-auto px-3 pb-[51px]">
        <ul className="flex items-center gap-5">
          {
            [1, 2, 3].map((item, idx) => (
              <li key={idx}>
                <Link href="#">
                  <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.32654 14.7303V8.29133H7.52133L7.93205 5.61996H5.32654V3.89365C5.32654 3.1628 5.68592 2.45716 6.85391 2.45716H8.03473V0.189012C8.03473 0.189012 6.95659 0 5.92979 0C3.78634 0 2.38732 1.28528 2.38732 3.59123V5.61996H0V8.29133H2.38732V14.7303H5.32654Z" fill="#2E368F" />
                  </svg>
                </Link>
              </li>
            ))
          }
        </ul>
        <p className="font_calibri text-theme-main text-sm font-light">© 2024 Adamallys . All rights reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
