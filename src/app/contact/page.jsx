import { getContactUs } from '@/services'
import dynamic from 'next/dynamic';
const ContactTemplate = dynamic(() => import('@/templates/contact'), { ssr: false });

const Contact = async () => {
    const data = await getContactUs();
    return <ContactTemplate {...data} />
}

export default Contact