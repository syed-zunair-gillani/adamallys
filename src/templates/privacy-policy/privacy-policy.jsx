import React from 'react'
import { getPrivacyPolicy } from '../../services'

const PrivacyPolicyTemplate = async () => {
    const data = await getPrivacyPolicy();

    console.log('data', data);

    return (
        <>
            <div className="mb-20" />
            <main>
                <h1 className="text-center text-2xl py-8 sm:text-[40px] font_calibri md:leading-[50px] md:text-[50px] lg:text-[60px] font-bold text-[#2E368F] mt-5 px-4">
                    Privacy Policy
                </h1>
            </main>
            <section className='container mx-auto px-3 privacy_content'>
                {
                    [1, 2, 3, 4]?.map((item, idx) => (
                        <div key={idx} className='content md:flex gap-10 mb-6'>
                            <h4 className='md:w-[25%] sm:text-xl md:text-[25px] font-bold text-theme-main font_calibri'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</h4>
                            <div className='md:w-[75%]'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    ))
                }
            </section>
        </>
    )
}

export default PrivacyPolicyTemplate