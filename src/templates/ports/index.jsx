import Image from 'next/image'
import PortLabelGroup from '@/components/PortLabelGroup';

const UAEPorts = ['Fujairah Port', 'Jebel Ali Ports (Dubai)', 'Dubai DryDocks', 'Port Rashid (Dubai)', 'Mina Khalifa (Abu Dhabi)', 'Mina Zayed (Abu Dhabi)', 'Khor Fakkan Port', 'Port Khalid (Sharjah)', 'Hamriyah Port (Sharjah)', 'Ajman Port', 'Umm Al Quwain Port.', 'Ras Al Khaimah Port', 'MINA SAQR (Ras Al Khaimah Port)', 'Mubarak Al Kabeer Port (Dubai).', 'Musaffah Port (Abu Dhabi)'];

const omanPorts = ['Sultan Qaboos Port (Muscat)', 'Salalah Port', 'Sohar Port', 'Duqm Port', 'Asyad Dry Dock (Duqm Dry Dock)', 'Khasab Port (Musandam)']

const PortsTemplates = () => {
  return (
    <main className='mt-[4rem] mb-[40px] lg:mb-[73px] container mx-auto'>
      <div className="pt-[30px] md:pt-[60px]">
        <h1 className='font_calibri capitalize text-[60px] leading-[60px] text-center font-bold text-theme-main mb-[46px]'>Ports</h1>
        <div className='px-[30px] pt-[38px] pb-[45px] blue_gradient'>
          <h2 className='mb-[26px]  font_calibri text-[40px] sm:text-[60px] leading-[60px] text-theme-main font-bold'>Ports in United Arab Emirates</h2>
          <Image style={{ width: '100%', objectFit: 'cover', objectPosition: 'center' }} src={'/images/ports/uae_ports.png'} alt='uae_ports' width={1600} height={700} />
          <div className="mt-[45px]">
            <PortLabelGroup labels={UAEPorts} />
          </div>
        </div>

        <div className='px-[30px] pt-[38px] pb-[45px] blue_gradient mt-[45px]'>
          <h2 className='mb-[26px] font_calibri text-[40px] sm:text-[60px] leading-[60px] text-theme-main font-bold'>Ports in OMAN</h2>
          <Image style={{ objectFit: 'cover', objectPosition: 'center' }} src={'/images/ports/oman_ports.png'} alt='uae_ports' width={1600} height={931} />
          <div className="mt-[45px]">
            <PortLabelGroup labels={omanPorts} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default PortsTemplates