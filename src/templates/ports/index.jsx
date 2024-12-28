"use client"
import Image from 'next/image'
import PortLabelGroup from '@/components/PortLabelGroup';
import { useState } from 'react';


const PortsTemplates = ({ports}) => {
  console.log("🚀 ~ PortsTemplates ~ ports:", ports)
  const [activePort, setActivePort] = useState({
    uae: "Mina Zayed (Abu Dhabi)",
    oman: ""
  })

  return (
    <main className='mt-[4rem] mb-[40px] lg:mb-[73px] container mx-auto'>
      <div className="pt-[30px] md:pt-[60px]">
        <h1 className='font_calibri capitalize text-[60px] leading-[60px] text-center font-bold text-theme-main mb-[46px]'>Ports</h1>
        <div className='px-[30px] pt-[38px] pb-[45px] blue_gradient'>
          <h2 className='mb-[26px] font_calibri text-[40px] sm:text-[60px] leading-[60px] text-theme-main font-bold'>Ports in United Arab Emirates</h2>
          <div class="container mx-auto max-w-[1280px] map overflow-x-auto">
            <div class="w-[1280px] relative">
              <Image
                className='w-[1280px] '
                style={{ width: '100%', objectFit: 'cover', objectPosition: 'center' }}
                src={'/images/ports/uaemap.png'} alt='uae_ports'
                width={1600}
                height={700}
              />
              {handlePortSelection(activePort?.uae)}
            </div>
          </div>
          <div className="mt-[45px]">
            <PortLabelGroup labels={ports?.UAE_Ports} type="uae" activePort={activePort} setActivePort={setActivePort} />
          </div>
        </div>

        <div className='px-[30px] pt-[38px] pb-[45px] blue_gradient mt-[45px]'>
          <h2 className='mb-[26px] font_calibri text-[40px] sm:text-[60px] leading-[60px] text-theme-main font-bold'>Ports in OMAN</h2>
          <div class="container mx-auto max-w-[1280px] map overflow-x-auto">
            <div class="w-[1280px] relative">
              <Image
                className='w-[1280px] '
                style={{ width: '100%', objectFit: 'cover', objectPosition: 'center' }}
                src={'/images/ports/oman_port.png'} alt='uae_ports'
                width={1600}
                height={700}
              />
              {handlePortOman(activePort?.oman)}
            </div>
          </div>
          <div className="mt-[45px]">
            <PortLabelGroup labels={ports?.Oman} type="oman" activePort={activePort} setActivePort={setActivePort} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default PortsTemplates

function handlePortOman(portName) {
  switch (portName) {
    case "Sultan Qaboos Port (Muscat)":
      return <div className='absolute top-[95px] left-[455px] flex flex-col-reverse rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/images/ports/port-sample.png" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -top-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Salalah Port":
      return <div className='absolute top-[22px] left-[467px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/images/ports/port-sample.png" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Sohar Port":
      return <div className='absolute top-[80px] left-[608px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/images/ports/port-sample.png" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Duqm Port":
      return <div className='absolute top-[90px] left-[642px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/images/ports/port-sample.png" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Asyad Dry Dock (Duqm Dry Dock)":
      return <div className='absolute top-[385px] left-[587px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/images/ports/port-sample.png" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Khasab Port (Musandam)":
      return <div className='absolute top-[655px] left-[387px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/images/ports/port-sample.png" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    default:
      console.log("Unknown port selected.");
      break;
  }
}

function handlePortSelection(portName) {
  console.log("🚀 ~ handlePortSelection ~ portName:", portName)
  switch (portName) {
    case "Fujairah Port":
      return <div className='absolute top-[5px] left-[774px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/images/ports/port-sample.png" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Jebel Ali Ports (Dubai)":
      return <div className='absolute top-[5px] left-[806px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/images/ports/port-sample.png" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Dubai DryDocks":
      return <div className='absolute top-[20px] left-[897px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/images/ports/port-sample.png" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Port Rashid (Dubai)":
      return <div className='absolute top-[90px] left-[890px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/images/ports/port-sample.png" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Mina Khalifa (Abu Dhabi)":
      return <div className='absolute top-[90px] left-[890px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/images/ports/port-sample.png" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Mina Zayed (Abu Dhabi)":
      return <div className='absolute top-[240px] left-[536px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/images/ports/port-sample.png" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Khor Fakkan Port":
      return <div className='absolute top-[255px] left-[490px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/images/ports/port-sample.png" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Port Khalid (Sharjah)":
      return <div className='absolute top-[210px] left-[600px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/images/ports/port-sample.png" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Hamriyah Port (Sharjah)":
      return <div className='absolute top-[132px] left-[650px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/images/ports/port-sample.png" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Ajman Port":
      return <div className='absolute top-[210px] left-[598px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/images/ports/port-sample.png" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Umm Al Quwain Port":
      return <div className='absolute top-[118px] left-[692px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/images/ports/port-sample.png" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Ras Al Khaimah Port":
      return <div className='absolute top-[82px] left-[696px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/images/ports/port-sample.png" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "MINA SAQR (Ras Al Khaimah Port)":
      return <div className='absolute top-[72px] left-[727px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/images/ports/port-sample.png" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Mubarak Al Kabeer Port (Dubai)":
      return <div className='absolute top-[47px] left-[749px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/images/ports/port-sample.png" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    case "Musaffah Port (Abu Dhabi)":
      return <div className='absolute top-[25px] left-[774px] rounded-[15px] z-10 bg-[#D50004]'>
        <Image src="/images/ports/port-sample.png" alt="" className='h-[132px] rounded-[15px] w-[264px] object-cover' width={264} height={132} />
        <h6 className='font-bold font_calibri px-4 pt-1 pb-1.5 text-white'>{portName}</h6>
        <div className='bg-[#D50004] h-7 w-7 absolute -rotate-45 -bottom-3 left-1/2 z-[-1] -translate-x-1/2' />
      </div>
    default:
      console.log("Unknown port selected.");
      break;
  }
}


const UAEPorts = [
  { name: "Fujairah Port", image: "fujairah_port.jpg", type: "uae" },
  { name: "Jebel Ali Ports (Dubai)", image: "jebel_ali_ports_dubai.jpg", type: "uae" },
  { name: "Dubai DryDocks", image: "dubai_drydocks.jpg", type: "uae" },
  { name: "Port Rashid (Dubai)", image: "port_rashid_dubai.jpg", type: "uae" },
  { name: "Mina Khalifa (Abu Dhabi)", image: "mina_khalifa_abu_dhabi.jpg", type: "uae" },
  { name: "Mina Zayed (Abu Dhabi)", image: "mina_zayed_abu_dhabi.jpg", type: "uae" },
  { name: "Khor Fakkan Port", image: "khor_fakkan_port.jpg", type: "uae" },
  { name: "Port Khalid (Sharjah)", image: "port_khalid_sharjah.jpg", type: "uae" },
  { name: "Hamriyah Port (Sharjah)", image: "hamriyah_port_sharjah.jpg", type: "uae" },
  { name: "Ajman Port", image: "ajman_port.jpg", type: "uae" },
  { name: "Umm Al Quwain Port", image: "umm_al_quwain_port.jpg", type: "uae" },
  { name: "Ras Al Khaimah Port", image: "ras_al_khaimah_port.jpg", type: "uae" },
  { name: "MINA SAQR (Ras Al Khaimah Port)", image: "mina_saqr_ras_al_khaimah_port.jpg", type: "uae" },
  { name: "Mubarak Al Kabeer Port (Dubai)", image: "mubarak_al_kabeer_port_dubai.jpg", type: "uae" },
  { name: "Musaffah Port (Abu Dhabi)", image: "musaffah_port_abu_dhabi.jpg", type: "uae" },
];

const omanPorts = [
  { name: "Sultan Qaboos Port (Muscat)", image: "sultan_qaboos_port_muscat.jpg", type: "oman" },
  { name: "Salalah Port", image: "salalah_port.jpg", type: "oman" },
  { name: "Sohar Port", image: "sohar_port.jpg", type: "oman" },
  { name: "Duqm Port", image: "duqm_port.jpg", type: "oman" },
  { name: "Asyad Dry Dock (Duqm Dry Dock)", image: "asyad_dry_dock_duqm_dry_dock.jpg", type: "oman" },
  { name: "Khasab Port (Musandam)", image: "khasab_port_musandam.jpg", type: "oman" },
];