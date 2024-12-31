import React from 'react'
import { getContactUs } from '@/services'
import ContactTemp from "@/templates/contact/contactTemp"

const ContactPage = async () => {
    const data = await getContactUs();

  return (
    <ContactTemp data={data}/>
  )
}

export default ContactPage
