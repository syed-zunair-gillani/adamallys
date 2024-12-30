'use client'
import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onToggle, hideToggle }) => {
  return (
    <div className="border-b last:border-b-0">
      <button
        className={`w-full text-left ${hideToggle ? 'pt-4' : 'p-4 hover:bg-gray-100'} focus:outline-none`}
        onClick={onToggle}
      >
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg text-theme-main">{title}</span>
          {hideToggle ? <></> : isOpen ? <span className='font-bold text-lg text-theme-main'>-</span> :
            <span className='font-bold text-lg text-theme-main'>+</span>
          }
        </div>
      </button>
      {isOpen && (
        <div className={`${hideToggle ? "pb-5" : "pt-[14px] pb-6 px-4"}`}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = ({ data = [], isOpen, hideToggle }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          hideToggle={hideToggle}
          isOpen={isOpen || openIndex === index}
          onToggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
