import React from "react";

function Leadingpage() {
  return (
    <>
      <section>
        <div>
          <h1 className="text-center text-2xl py-8 sm:text-[40px] font_calibri md:leading-[50px] md:text-[50px] lg:text-[60px] font-bold text-[#2E368F] mt-5 px-4">
            Digitalization & Technology at Adamallys
          </h1>
        </div>
        <div className="w-full max-w-[100%] relative bg-[url('/images/image.svg')] bg-no-repeat bg-cover h-[350px] md:h-[450px] lg:h-[450px] py-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#171F7C] to-[#171F7C00] opacity-75"></div>
          <div className="container  absolute inset-0 text-white sm:left-10 md:left-16 lg:left-20 py-10 sm:mt-0 md:mt-20 lg:mt-20 w-full sm:w-[80%] md:w-[60%] lg:w-[519px] px-6 sm:px-0">
            <h1 className="text-[24px] sm:text-[32px] font_franklin md:text-[40px] lg:text-[40px] font-bold leading-[36px] sm:leading-[44px] md:leading-[49px] mb-3">
              Leading Marine Supply Through Technology
            </h1>
            <p className="text-[16px] sm:text-[18px]font_calibri font-light">
              At Adamallys LLC, we are dedicated to transforming the ship supply
              industry with cutting-edge digital tools and innovative solutions.
              Our commitment to digitalization enhances every aspect of our
              service, ensuring that our clients benefit from seamless,
              efficient, and transparent processes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Leadingpage;
