import React from 'react';
import bg from "../../../public/images/milestone-bg.png";
import Image from 'next/image';

const Milestones = () => {
    const milestoneBg = bg?.src;
    return (
        <section 
            className='milestone_bg bg-right !bg-no-repeat !bg-cover' 
            style={{ backgroundImage: `url(${milestoneBg})` }}
        >
            <div className='container mx-auto px-3 py-[54px]'>
                <h4 className='text-[40px] text-white font_franklin'>Milestones</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[17px] mt-10 mb-10'>
                    {
                        [1, 2, 3, 4, 5, 6]?.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="flex w-full items-center p-[34px] bg-black/40 backdrop-blur-[6px] border border-white/60 text-white"
                            >
                                <figure className="text-5xl mb-2">
                                    <Image 
                                        src="/svg/calendar_month.svg" 
                                        alt="Calendar Icon" 
                                        width={81} 
                                        height={81} 
                                    />
                                </figure>
                                <div>
                                    <div className="text-[36px] sm:text-[50px] leading-10 font_franklin">50+</div>
                                    <div className="font-light md:mt-1 font_calibri">Years in Business</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Milestones;
