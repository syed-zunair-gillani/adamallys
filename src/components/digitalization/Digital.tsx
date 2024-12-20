import Image from "next/image";
import React from "react";

function Digital() {
  return (
    <div className='container mx-auto px-4'>
      <section className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 mt-10 mx-auto  ">
      <div className="max-w-full">
          <Image
            width={500}
            height={500}
            src="/images/image copy.svg"
            alt="Digital Advantage Illustration"
            className="w-full max-h-[580px] h-auto object-cover"
          />
        </div>
      
        <div className="bg-[#DFE2FF] text-[#171F7C] px-6 py-10 md:px-10 md:py-16 ">
  <h2 className="text-[28px] md:text-[40px] font-[700] font_franklin">
    Our Vision for Digital <br /> Transformation
  </h2>

  <div className=" font_calibri">
    <p className="py-4">
      At Adamallys, we believe that the future of marine supply lies in continuous digital innovation. Our vision includes:
    </p>
    <p className="flex  py-4 ">
    <li className="text-2xl"></li>
      Enhancing Operational Efficiency: Through automation and advanced data analytics, we reduce manual processes, cut lead times, and improve accuracy.
    </p>
    <p className="flex  ">
    <li className="text-2xl"></li>
      Pioneering Client-Centric Solutions: We actively seek and adopt technologies that provide value to our clients, from personalized integrations to automated order updates.
    </p>
    <p className="flex  py-4 ">
    <li className="text-2xl"></li>
      Fostering Innovation in Sustainability: Our digital systems help us reduce waste, optimize energy use, and support green initiatives as we build a sustainable future in marine logistics.
    </p>
  </div>
</div>

        
      </section>
    </div>
  );
}

export default Digital;
