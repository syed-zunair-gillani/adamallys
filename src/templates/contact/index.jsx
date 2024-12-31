'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import MapComponent from '@/components/MapComponent';

const defaultValues = {
  name: '',
  companyName: '',
  phoneNumber: '',
  email: '',
  message: ''
}

const ContactTemplate = (props) => {
  console.log("🚀 ~ ContactTemplate ~ props:", props)
  const { AddressOne, AddressTwo, Email, Fax, MobileNumber } = props.data;
  const [formData, setFormData] = useState(defaultValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handlePhoneChange = (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, '');
    setFormData(prevData => ({
      ...prevData,
      phoneNumber: inputValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main
      className='mt-[8rem]'
      style={{ overflowX: 'hidden' }}
    >
      <div className="flex flex-col lg:flex-row container mx-auto z-[1] relative">
        <div className="basis-full md:min-w-[471px] md:basis-[40%] px-[30px] pt-[34px] pb-[42px] sm:px-[62px] sm:pt-[68px] sm:pb-[76px]  bg-theme-main">
          <h1 className='text-white font-bold text-[60px] leading-[62px] mb-6'>Contact</h1>
          <div className="flex gap-[11px] text-white">
            <div className='mt-1.5 min-w-6 h-6'>
              <Image className='min-w-6 h-6' src={'/svg/location_on.svg'} alt='location_on' width={23} height={23} />
            </div>
            <div>
              <p className='text-lg leading-[26px]'>
                {AddressOne}
              </p>
              <p className='text-lg leading-[26px] mt-[18px]'>
                {AddressTwo}
              </p>
            </div>
          </div>
          <div className="mt-[45px] inline-flex flex-col gap-[9px]">
            <div className="w-auto border border-white h-[46px] pr-[18px] inline-flex items-center gap-[15px] rounded-[30px]">
              <div className='w-[50px] h-[46px] flex items-center justify-center bg-white rounded-[46%]'>
                <Image src={'/svg/call-icon.svg'} alt='location_on' width={23} height={23} />
              </div>
              <p className='text-lg leading-[26px] text-white'>{MobileNumber}</p>
            </div>
            <div className="w-auto border border-white h-[46px] pr-[18px] inline-flex items-center gap-[15px] rounded-[30px]">
              <div className='w-[50px] h-[46px] flex items-center justify-center bg-white rounded-[46%]'>
                <Image src={'/svg/print.svg'} alt='location_on' width={23} height={23} />
              </div>
              <p className='text-lg leading-[26px] text-white'>{Fax}</p>
            </div>
            <div className="w-auto border border-white h-[46px] pr-[18px] inline-flex items-center gap-[15px] rounded-[30px]">
              <div className='w-[50px] h-[46px] flex items-center justify-center bg-white rounded-[46%]'>
                <Image src={'/svg/mail-icon.svg'} alt='location_on' width={23} height={23} />
              </div>
              <p className='text-lg leading-[26px] text-white'>{Email}</p>
            </div>
          </div>
        </div>
        <div className="basis-full bg-[#F5F6F8] flex items-center justify-center">
          <form onSubmit={handleSubmit} className='w-full px-[30px] py-[34px] sm:px-[55px] sm:py-[76px]'>
            <div className="flex flex-col gap-4">
              <p className='text-theme-main font-bold text-[40px] leading-[44px]'>Have a Question?</p>
              <div className='flex gap-6'>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Your Name"
                  className="w-full h-[55px] py-1 bg-transparent border-b border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  placeholder="Company Name"
                  className="w-full h-[55px] py-1 bg-transparent border-b border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
                  onChange={handleChange}
                />
              </div>
              <div className='flex gap-6'>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  placeholder="Phone Number"
                  className="w-full h-[55px] py-1 bg-transparent border-b border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
                  onChange={handlePhoneChange}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  className="w-full h-[55px] py-1 bg-transparent border-b border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
                  onChange={handleChange}
                />
              </div>
              <div className='flex gap-6'>
                <textarea
                  type="text"
                  name="message"
                  rows={4}
                  value={formData.message}
                  placeholder="Message"
                  className="w-full py-1 bg-transparent border-b border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex justify-center items-center gap-[8px] mt-[23px]">
              <button
                type="submit"
                className="w-[157px] flex font-bold text-lg items-center justify-center gap-[12px] w-full h-[55px] py-1 bg-[text-theme-main] text-white bg-theme-main"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-[-70px] z-[0] relative">
        <MapComponent />
      </div>
    </main>
  )
}

export default ContactTemplate