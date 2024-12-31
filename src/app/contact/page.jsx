import React from 'react'
import { getContactUs } from '@/services'
import Contact from "./index"

const ContactPage = async () => {
    const data = await getContactUs();

  return (
    <Contact data={data}/>
  )
}

export default ContactPage
