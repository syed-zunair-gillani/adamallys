import History from './History'
import Expertise from './Expertise'
import PresentDay from './PresentDay'
import AboutHeader from './AboutHeader'
import AboutInfoCard from './AboutInfoCard'
import CorporateInformation from './CorporateInformation'

const AboutTemplate = () => {
  return (
    <main
      className='mt-[6rem] container mx-auto'
      style={{ overflowX: 'hidden' }}
    >
      <div className='py-[30px] md:py-[60px]'
        style={{
          background: 'linear-gradient(to bottom, #ffffff , #F4F5F7 )'
        }}
      >
        <AboutHeader />
        <AboutInfoCard />
        <CorporateInformation />
      </div>
      <History />
      <PresentDay />
      <div className="py-[30px] md:py-[60px]">
        <Expertise />
      </div>
    </main>
  )
}

export default AboutTemplate