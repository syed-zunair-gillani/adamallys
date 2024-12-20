import React from 'react';

function Logocard2() {
  const cards = [
    { logo: '/images/Layer_1.svg', title: 'IMPA' },
    { logo: '/images/image 59.svg', title: 'MESPAS ID: SSM-N3X' },
    { logo: '/images/image 58.svg', title: 'TradeNet ID: 59590' },
    { logo: '/images/Layer_1 (2).svg', title: 'Marine Traffic' },
    { logo: '/images/Layer_1 (3).svg', title: 'ISSA' },
    { logo: '/images/Layer_1 (4).svg', title: ' ProcureShip ID: 440' },
  ];

  return (
   <div className='container mx-auto px-4'>
 <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  mt-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center mx-auto w-full max-w-[600px] h-auto sm:h-[300px] justify-center border border-gray-300 p-4   duration-300"
        >
          <img src={card.logo} alt={card.title} className="object-contain mb-4 w-[250px] h-[150px]" />
          <h2 className="text-center text-[18px] sm:text-[20px] lg:text-[22px] font-[700] text-[#171F7C]">
            {card.title}
          </h2>
        </div>
      ))}
    </section>
   </div>
  );
}

export default Logocard2;
