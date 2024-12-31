import { getContactUs } from '@/services'
const ContactTemplate = dynamic(() => import('@/templates/contact'), { ssr: false });

const Contact = async () => {
    const data = await getContactUs();
    return <ContactTemplate {...data} />
}

export default Contact