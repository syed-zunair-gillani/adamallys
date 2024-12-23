import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

function Card() {
  const cards = [
    { 
      logo: '/images/card.svg', 
      title: 'ISO 9001:2015',
      date: '25 January 2024',
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.',
      link: '#'
    },
 
  ];

  return (
    <div className="container mx-auto px-4 py-32">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center mx-auto w-full max-w-[600px] h-auto sm:h-[300px] justify-center mt-10 duration-300"
          >
            <img src={card.logo} alt={card.title} className="w-full" />
            <div className="bg-[#F5F6F8] w-full py-8 px-10">
              <p className="text-[#2E368F]">{card.date}</p>
              <h3 className="text-[25px] font-[300] text-[#8B8B8B] py-3">{card.description}</h3>
              <span className="flex items-center gap-4 text-[#2E368F] mt-4">
                <a href={card.link}>Read More</a>
                <IoIosArrowForward />
              </span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Card;
