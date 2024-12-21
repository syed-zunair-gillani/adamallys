import LeftCard from '@/components/Cards/left-card'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import GridBanner from '@/components/hero/grid-banner'
import OtherServices from "@/components/other-services-slider/OtherServices"
import React from 'react'

const MarineLogistics = () => {
    return (
        <>
            <div className="mb-24" />
            <section>
                <div>
                    <h1 className="text-center text-2xl py-8 sm:text-[40px] font_calibri md:leading-[50px] md:text-[50px] lg:text-[60px] font-bold text-[#2E368F] px-4">
                        Products & Services
                    </h1>
                </div>
                <GridBanner active="center" />
            </section>

            <section className="mt-14 container mx-auto px-3 flex flex-col sm:flex-row gap-5 md:gap-10">
                <div className='sm:w-[30%]'>
                    <LeftCard />
                </div>
                <div className='sm:w-[70%]'>
                    <h2 className='text-3xl md:text-5xl lg:text-6xl font_calibri text-theme-main font-bold'>Marine Logistics</h2>
                    <h5 className='text-2xl md:text-[30px] my-3 font-bold text-theme-main font_calibri'>In publishing and graphic design, Lorem ipsum is a placeholder </h5>
                    <div className='border-t mt-8'>
                        {
                            [1, 2, 3, 4]?.map((item, idx) => (
                                <div className='border-b py-5' key={idx}>
                                    <button className='text-xl font-bold pb-1 text-theme-main font_calibri flex justify-between w-full items-center'>
                                        Oilfield & Government Project Imports
                                    </button>
                                    <p className=''>A complete Service for management, import, export and supply for projects.</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className="mt-14 container mx-auto px-3 flex flex-col sm:flex-row gap-5 md:gap-10">
                <div className='sm:w-[30%]'>
                    <div className='wherehouse-video'>
                        <video autoPlay loop muted>
                            <source src={`https://s3-figma-videos-production-sig.figma.com/video/992398375378564435/TEAM/b568/9dd8/-bb4f-4920-a181-86bc14f588bc?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lTNtObZ~hbqTiqm~twUkwt7ZR60d37eTnoKFbJw9M3C2gne1t8qZv9m~OxN5AybBeUOQXkSrGDtn7OTY5h6HP30TSZto-S1Rm3lFzTtbl6qh7d2ge63F~ZjNlGkdp8J9oahaoQiSqVrLjQRGX5hmYHfqvLG1bMRbBYj8jIIqoTZUzt5jhNpNatiu~qEM5jkFRmRJxSwbfUSfcHd~Kc2-0bW5p47GVOUW1WYfPwnYxbMoxTYfoWlnmqZxvSElxgtTkTUgsmqY5LGNzAsQlXt~sPTVcPSFrZpXIz-pRNBujLMSXN97pZTWdSjaEhPL432l-nz-KckFDd7AHQM~oXyLyw__`} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className='sm:w-[70%] flex flex-col'>
                    <div>
                        <h2 className='text-3xl md:text-5xl lg:text-6xl font_calibri text-theme-main font-bold'>Warehousing</h2>
                        <h5 className='text-2xl md:text-[30px] my-3 text-theme-main font_calibri'>We have three warehouse locations, which highlight the facility to store our extensive range of stores: </h5>
                    </div>
                    <div className='grid grid-cols-2 gap-4 mt-10 h-full'>
                        <div className='blue_gradient2 p-9 text-white flex flex-col justify-center'>
                            <h3 className='font_franklin text-4xl md:text-[50px]'>400,000 sq ft</h3>
                            <p className='font_calibri text-xl mt-3'>Total warehouse space</p>
                        </div>
                        <div className='blue_gradient2 p-9 text-white flex flex-col justify-center'>
                            <h3 className='font_franklin text-4xl md:text-[50px]'>60+</h3>
                            <p className='font_calibri text-xl mt-3'>fleet of transport vehicles for the supply of stores to various ports.</p>
                        </div>
                    </div>
                </div>
            </section>

            <ChooseAdamallys />

            <OtherServices />
        </>
    )
}

export default MarineLogistics