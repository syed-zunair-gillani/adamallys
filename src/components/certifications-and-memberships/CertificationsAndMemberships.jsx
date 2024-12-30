import React from "react";

const CertificationsAndMemberships = ({data}) => {
  return (
    <section className="certification-gradient -mt-[6px]">
      <div className="container mx-auto px-3 py-16">
        <h4 className="text-xl md:text-2xl text-white font_calibri mb-10">
          Certifications & Memberships
          <div className="h-[2px] w-[34px] bg-white mt-2" />
        </h4>
        <div className="flex justify-center gap-2 lg:justify-between items-center flex-wrap">
          {data?.slice(0,6).map(
            (item, idx) => (
              <React.Fragment key={idx}>
                 <figure className="flex justify-center w-[162px] h-[162px]">
                  <img src={item?.Icon?.data?.attributes?.url} alt="" className="w-[110px] md:w-[140px] lg:w-[162px] object-contain" />
                </figure>
              </React.Fragment>
            )
          )}
        </div>
        <div className="h-[1px] w-full bg-[#5860BC] my-5"/>
        <div className="flex justify-center gap-2 lg:justify-between items-center flex-wrap">
          {data?.slice(6,12).map(
            (item, idx) => (
              <React.Fragment key={idx}>
                <figure className="flex justify-center w-[162px] h-[162px]">
                  <img src={item?.Icon?.data?.attributes?.url} alt="" className="w-[110px] md:w-[140px] lg:w-[162px] object-contain" />
                </figure>
              </React.Fragment>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CertificationsAndMemberships;
