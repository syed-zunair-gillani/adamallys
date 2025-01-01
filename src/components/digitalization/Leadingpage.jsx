const LeadingPageBanner = ({ title, content, bgImage }) => {
  return (
    <>
      <section>
        <div
          style={{
            backgroundSize:'cover',
            backgroundPosition: 'right',
            backgroundImage: bgImage ? `url(${bgImage})` : `url('/images/ship-supply/banner-bg.png')`
          }}
          className={`w-full max-w-[100%] relative bg-no-repeat bg-contain`}>
          <div className="absolute inset-0 banner-gradient"></div>
          <div className="container relative text-white w-full sm:w-[90%] md:w-[80%] px-6 py-5 sm:px-9 sm:py-8 lg:w-[776px] lg:px-[68px] lg:py-[56px]">
            <h1 className="text-[24px] z-[99] sm:text-[32px] font_franklin md:text-[40px] lg:text-[40px] font-bold leading-[36px] sm:leading-[44px] md:leading-[49px] mb-3">
              {title}
            </h1>
            <p className="text-[16px] sm:text-[18px] font_calibri font-light">
              {content}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default LeadingPageBanner;
