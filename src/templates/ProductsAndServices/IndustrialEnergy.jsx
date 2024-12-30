import Accordion from '@/components/Accordion'
import IndustrialEnergyComp from '@/components/IndustrialEngery'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import OtherServices from "@/components/other-services-slider/OtherServices"
const data = [
  {
    title: "Drilling Equipment",
    content: "Our drilling equipment enhances the efficiency and safety of oil and gas extraction. We provide a full selection of tools, including drill bits, mud pumps, and casing accessories, designed to withstand harsh drilling environments."
  },
  {
    title: "Chemicals and Drilling Fluids",
    content: ""
  },
  {
    title: "Chemicals for Oil and Water Treatment",
    content: ""
  },
  {
    title: "Heat Exchangers, Air Coolers, and Pressure Vessels",
    content: ""
  },
  {
    title: "Corrosion Monitoring and Cathodic Protection",
    content: ""
  },
  {
    title: "Fire Pumps, Hydrants, Foam, and Hoses",
    content: ""
  },
  {
    title: "Fire Protection Systems",
    content: ""
  },
  {
    title: "Complete Range of Safety Wear:",
    content: ""
  },
  {
    title: "Tubing, Casing, and Piping Solutions:",
    content: ""
  },
  {
    title: "Flanges",
    content: ""
  },
  {
    title: "Instrumentation (Control Panels, Analyzing & Metering Systems):",
    content: ""
  },
  {
    title: "Valves and Actuators:",
    content: ""
  },
  {
    title: "Materials and Grades",
    content: ""
  },
  {
    title: "Mechanical Seals and Couplings:",
    content: ""
  },
  {
    title: "Actuators and Surface Safety Valves (SSVs)",
    content: ""
  },
  {
    title: "Industrial Pumps",
    content: ""
  },
  {
    title: "Air Compressor Packages",
    content: ""
  },
  {
    title: "Lube and Oil Additives",
    content: ""
  }
]

const IndustrialEnergy = () => {
  return (
    <div>
      <section className="mt-14 container mx-auto px-3 flex flex-col lg:flex-row gap-5 lg:gap-10 mb-10 lg:mb-20">
        <div className='lg:w-[30%] min-w-[464px]'>
          <IndustrialEnergyComp />
        </div>
        <div className='lg:w-[70%]'>
          <h2 className='text-[60px] leading-[67px] font-bold text-theme-main'>Industrial & Energy Sector Supplies</h2>
          <p className="text-lg font-light leading-[26px] py-[17px]">At Adamallys, we offer a comprehensive range of high-quality products essential for the industrial, oil, and gas sectors. Our extensive inventory supports efficient and safe operations across offshore and onshore projects, addressing the specific needs of these demanding industries.</p>
          <p className="text-[40px] leading-[45px] text-theme-main">Our Key Product Offerings</p>
          <div className='my-[30px] w-full h-[1px] bg-[#B2B6E0]' />
          <Accordion data={data} />
        </div>
      </section>
      <ChooseAdamallys />
      <OtherServices />
    </div>
  )
}

export default IndustrialEnergy