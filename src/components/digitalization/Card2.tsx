import Image from "next/image";
import React from "react";

function Card2() {
  return (
    <div className="container mx-auto px-4">
      <section className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 mt-10 mx-auto   items-stretch">
        <div className="bg-gradient-to-b from-[#a7ace3] to-[#2E368F] text-white  px-6 py-10 md:px-10 md:py-16 flex items-center h-full">
          <div>
          <h2 className="text-[28px] md:text-[40px] font-[700] font_franklin">Our Digital Advantage</h2>
          <div className="font_calibri">
            <p className="flex mt-7">
              <li className="text-2xl"></li>
              Advanced ERP Systems: Our powerful ERP systems leverage machine
              learning to provide rapid, accurate quotations and optimize supply
              chain operations, enhancing speed and accuracy across orders.
            </p>
            <p className="flex  py-4">
            <li className="text-2xl"></li>
              RFID Tracking & Traceability: We implement RFID technology for
              full transparency and tracking across our distribution channels,
              allowing our clients to monitor the status of their supplies in
              real-time.
            </p>
            <p className="flex ">
            <li className="text-2xl"></li>
              Integrated Digital Catalog: Our comprehensive digital catalog
              streamlines product selection and ordering, offering an intuitive
              interface to access our full range of ship supplies with ease.
            </p>
            <p className="flex  py-4">
            <li className="text-2xl"></li>
              Customized System Integrations: We work closely with clients to
              provide tailored system integrations that ensure compatibility
              with their existing technologies, delivering a seamless digital
              experience.
            </p>
          </div>
        </div>
        
          </div>
          <div className="max-w-full">
          <Image
            width={500}
            height={500}
            src="/images/2.svg"
            alt="Digital Advantage Illustration"
            className="w-full max-h-[580px] h-auto object-cover"
          />
        </div>
      </section>
    </div>
  );
}

export default Card2;
