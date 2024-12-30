import Image from "next/image";
import React from "react";

const CertificationsAndMemberships = () => {
  return (
    <section className="certification-gradient -mt-[6px]">
      <div className="container mx-auto px-3 py-16">
        <h4 className="text-xl md:text-2xl text-white font_calibri mb-10">
          Certifications & Memberships
          <div className="h-[2px] w-[34px] bg-white mt-2" />
        </h4>
        <div className="flex flex-wrap justify-between">
          {arr.map(
            (item, idx) => (
              <React.Fragment key={idx}>
                <figure className="flex justify-center">
                  <Image src="/images/l1.png" alt="" width={162} height={162} />
                </figure>
                {/* {((idx + 1) % 6 === 0 && idx !== arr.length - 1) && <div className="col-span-6 pt-[1px] w-[92%] mx-auto bg-gray-700 my-6" />} */}
              </React.Fragment>
            )
          )}
        </div>
        <div className="h-[1px] w-full bg-[#5860BC] my-5"/>
        <div className="flex flex-wrap justify-between">
          {arr.map(
            (item, idx) => (
              <React.Fragment key={idx}>
                <figure className="flex justify-center">
                  <Image src="/images/l1.png" alt="" width={162} height={162} />
                </figure>
                {/* {((idx + 1) % 6 === 0 && idx !== arr.length - 1) && <div className="col-span-6 pt-[1px] w-[92%] mx-auto bg-gray-700 my-6" />} */}
              </React.Fragment>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CertificationsAndMemberships;


const arr = [1, 2, 3, 4, 5, 6]