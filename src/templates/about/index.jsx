import History from './History'
import Expertise from './Expertise'
import PresentDay from './PresentDay'
import AboutHeader from './AboutHeader'
import AboutInfoCard from './AboutInfoCard'
import CorporateInformation from './CorporateInformation'

const AboutTemplate = async ({ data }) => {

  return (
    <>
      <main
        className='mt-[6rem]'
        style={{ overflowX: 'hidden' }}
      >
        <div className='py-[30px] md:py-[60px]'
          style={{
            background: 'linear-gradient(to bottom, #ffffff , #F4F5F7 )'
          }}
        >
          <AboutHeader data={data} />
          <AboutInfoCard data={data?.AboutCards} />
        </div>
      </main>
      <CorporateInformation data={data} />

      <History data={data} />
      <PresentDay data={data} />
      <div className="py-[30px] md:py-[60px] z-[100] bg-white relative ">
        <Expertise media={data?.ExpertiseMedia} data={data?.ExpertiseCards} />
      </div>

    </>
  )
}

export default AboutTemplate