"use client"
import dynamic from 'next/dynamic';
const ContactTemplate = dynamic(() => import('@/templates/contact'), { ssr: false });

const Contact = async ({data}) => {
    return <ContactTemplate {...data} />
}

export default Contact