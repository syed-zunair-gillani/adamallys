import Image from 'next/image'
import React from 'react'

const historyData = [
  {
    year: '1972 ',
    info: 'Adamallys was founded as a pioneer stockist of technical marine stores, quickly establishing itself as a key distributor for renowned brands in the maritime industry. From the beginning, Adamallys focused on reliability and quality in the marine supply sector.'
  },
  {
    year: '1980s',
    info: 'During this decade, Adamallys concentrated on building a robust inventory and enhancing technical expertise. The company specialized in various marine store categories and invested in partnerships with leading brands to deliver high-quality, tailored solutions for specific segments in the maritime industry.'
  },
  {
    year: '1990s',
    info: 'Recognizing the industry’s growing demands, Adamallys expanded its services to include full ship supply, catering to a wide range of vessel needs. This shift allowed the company to serve shipowners and managers comprehensively and enter new markets, including offshore oil and gas operations, onshore industrial sectors, and ports and shipyards supply.'
  },
  {
    year: '2000',
    info: 'To support the continued growth and diverse client needs, Adamallys established multiple specialized warehouses, each focused on distinct categories of marine stores. This infrastructure allowed for efficient stock management and faster, more reliable service for customers.'
  },
  {
    year: '2010',
    info: 'Adamallys deepened its relationships with prominent ship owners and management companies, becoming a trusted partner known for its rigorous sourcing policies and commitment to the safety of seafarers. This decade solidified its reputation for delivering consistent, high-quality products and services.'
  },
  {
    year: '2020',
    info: 'Alongside launching the Ship Spare Parts Division, Adamallys invested in infrastructure development, establishing three dedicated provisions fulfillment centers to support the expanding provisions division. These new centers allowed us to cater to heightened demand with enhanced efficiency and service capabilities.'
  },
  {
    year: '2022',
    info: 'Adamallys increased its focus on sustainability and digitalization, implementing complete supply chain traceability and actively measuring carbon output. The company installed solar panels to reduce energy consumption, expanded its product range to include more sustainable choices in technical and provision categories, and committed to a greener, more responsible future for the maritime industry.'
  },
]

const History = () => {
  return (
    <div className='flex flex-col md:flex-row gap-[82px]'>
      <div className="basis-[45%]">
        {
          [1, 2, 3, 4, 5, 6, 7].map(count =>
            <Image key={count} src={`/images/about/history_image_${count}.png`} alt='history image' width={800} height={308} />
          )
        }
      </div>
      <div className='basis-[55%] lg:mt-[250px]'>
        <p className="font_calibri capitalize text-[59px] leading-[49px] pb-[26px]">History</p>
        <p className="font_calibri text-bold text-[20px] leading-[29px] pb-[69px]">Pioneers in the Ship Supply Sector of the UAE
        </p>
        <div className="flex flex-col gap-[8px]">
          {
            historyData?.map((history, index) =>
              <div key={history?.year} className="flex gap-[10px]">
                <div>
                  <p className="font_calibri capitalize text-[59px] leading-[49px] text-theme-main">{history?.year}</p>
                  <div style={{
                    width: 58,
                    height: 6,
                    marginTop: 20,
                    background: 'linear-gradient(to right, #171F7C, #B2B6E0  )'
                  }} />
                  {(index !== historyData?.length - 1) &&
                    < Image className='mt-[1rem] h-[295px]' src='/images/about/history_line.png' alt='history-line' width={4} height={295} />
                  }
                </div>
                <p>{history?.info}</p>
              </div>
            )
          }
        </div>
      </div>

    </div>
  )
}

export default History