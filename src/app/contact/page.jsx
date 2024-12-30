import { getContactUs } from '@/services'
import ContactTemplate from '@/templates/contact'

const Contact = async () => {
    const data = await getContactUs();
    return <ContactTemplate {...data} />
}

export default Contact