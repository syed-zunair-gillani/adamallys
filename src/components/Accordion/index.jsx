'use client'
import { useState } from 'react';
import Image from 'next/image';

const AccordionItem = ({ isHeader, isFooter, title, content, isOpen, onToggle, hideToggle }) => {
  return (
    <div className={`${isFooter && 'pb-3'} border-b border-[#8B8B8B80] last:border-b-0`}>
      <button
        className={`w-full text-left ${(isHeader || hideToggle || isFooter) ? 'pt-4' : 'p-4 hover:bg-gray-100'} focus:outline-none`}
        onClick={onToggle}
      >
        <div className="flex justify-between items-center">
          <span className={`${(isHeader && !isOpen) ? '' : 'font-bold'} text-lg text-theme-main`}>
            {title}
            {(isHeader && isOpen) &&
              <span className='block mt-2 w-[18px] h-[2px] bg-theme-main' />
            }
          </span>
          {
            isHeader ? <>
              {isOpen ?
                <Image src='/svg/arrow_down.svg' alt='arrow_downward' width={17} height={17} /> :
                <Image src='/svg/arrow_forward_nav.svg' alt='arrow_forward_nav' width={17} height={17} />
              }
            </> :
              hideToggle ? <></> : isOpen ?
                <span className='font-bold text-lg text-theme-main'>-</span> :
                <span className='font-bold text-lg text-theme-main'>+</span>
          }
        </div>
      </button>
      {isOpen && (
        <div className={`${isHeader ? "" : hideToggle ? "pb-5" : "pt-[14px] pb-6 px-4"}`}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = ({ isHeader, isFooter, data = [], isOpen, hideToggle, isFirstOpen }) => {
  const [openIndex, setOpenIndex] = useState(isFirstOpen ? 0 : null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isFooter={isFooter}
          isHeader={isHeader}
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
