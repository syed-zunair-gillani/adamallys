"use client"
import Image from 'next/image'
import PortLabelGroup from '@/components/PortLabelGroup';
import { useState } from 'react';


const PortsTemplates = () => {
  const [activePort, setActivePort] = useState({
    uae: "",
    oman: ""
  })
  console.log("🚀 ~ PortsTemplates ~ activePort:", activePort)

  return (
    <main className='mt-[4rem] mb-[40px] lg:mb-[73px] container mx-auto'>
      <div className="pt-[30px] md:pt-[60px]">
        <h1 className='font_calibri capitalize text-[60px] leading-[60px] text-center font-bold text-theme-main mb-[46px]'>Ports</h1>
        <div className='px-[30px] pt-[38px] pb-[45px] blue_gradient'>
          <h2 className='mb-[26px]  font_calibri text-[40px] sm:text-[60px] leading-[60px] text-theme-main font-bold'>Ports in United Arab Emirates</h2>
          <Image style={{ width: '100%', objectFit: 'cover', objectPosition: 'center' }} src={'/images/ports/uae_ports.png'} alt='uae_ports' width={1600} height={700} />
          <div className="mt-[45px]">
            <PortLabelGroup labels={UAEPorts} activePort={activePort} setActivePort={setActivePort}/>
          </div>
        </div>

        <div className='px-[30px] pt-[38px] pb-[45px] blue_gradient mt-[45px]'>
          <h2 className='mb-[26px] font_calibri text-[40px] sm:text-[60px] leading-[60px] text-theme-main font-bold'>Ports in OMAN</h2>
          <Image style={{ objectFit: 'cover', objectPosition: 'center' }} src={'/images/ports/oman_ports.png'} alt='uae_ports' width={1600} height={931} />
          <div className="mt-[45px]">
            <PortLabelGroup labels={omanPorts} activePort={activePort} setActivePort={setActivePort}/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PortsTemplates



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