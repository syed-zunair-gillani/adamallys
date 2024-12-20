import React from 'react';

function Logocard() {
  const cards = [
    { logo: '/images/bddf75adb7f1096df51f2d8d285b36f8 (1).png', title: 'ISO 9001:2015' },
    { logo: '/images/ISO 22000 Place Holder 1 (1).png', title: 'TUV NORD' },
    { logo: '/images/TUV ISO 14001 1.svg', title: 'ISO 14001:2015' },
    { logo: '/images/tuv_nord - haccp 1.svg', title: 'TUV NORD' },
    { logo: '/images/tuvnord_iso_certification_V2 1.svg', title: 'ISO 45001:2018' },
    { logo: '/images/image 60.svg', title: 'U.N.S.S.A' },
  ];

  return (
   <div className='container mx-auto px-4'>
 <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8   mt-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center mx-auto w-full max-w-[600px] h-auto sm:h-[300px] justify-center border border-gray-300 p-4   duration-300"
        >
          <img src={card.logo} alt={card.title} className="object-contain mb-4 w-[150px] h-[150px]" />
          <h2 className="text-center text-[18px] sm:text-[20px] lg:text-[22px] font-[700] text-[#171F7C]">
            {card.title}
          </h2>
        </div>
      ))}
    </section>
   </div>
  );
}

export default Logocard;
