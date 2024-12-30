import { getAboutUs } from '@/services'
import AboutTemplate from '@/templates/about'

const About = async() => {
  const page = await getAboutUs()
  
  return(
    <AboutTemplate />
  )
}

export default About