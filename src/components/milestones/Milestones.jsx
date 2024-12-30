import React from 'react';
import bg from "../../../public/images/milestone-bg.png";
import Image from 'next/image';

const Milestones = ({data}) => {
    console.log("🚀 ~ Milestones ~ data:", data)
    const {Background_Image, Milestones} = data
    return (
        <section 
            className='milestone_bg bg-right !bg-no-repeat !bg-cover' 
            style={{ backgroundImage: `url(${Background_Image?.data?.attributes?.url})` }}
        >
            <div className='container mx-auto px-3 py-[54px]'>
                <h4 className='text-[40px] text-white font_franklin'>Milestones</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[17px] mt-10 mb-10'>
                    {
                        Milestones?.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="flex w-full items-center p-[34px] bg-black/40 backdrop-blur-[6px] border border-white/60 text-white"
                            >
                                <figure className="text-5xl mb-2">
                                    <Image 
                                        src={item.Icon?.data?.attributes?.url}
                                        alt="Calendar Icon" 
                                        width={81} 
                                        height={81} 
                                    />
                                </figure>
                                <div>
                                    <div className="text-[36px] sm:text-[50px] leading-10 font_franklin">{item?.title}</div>
                                    <div className="font-light md:mt-1 font_calibri">{item?.subtitle}</div>
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
