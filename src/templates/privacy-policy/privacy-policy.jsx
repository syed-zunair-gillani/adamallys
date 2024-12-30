import { getPrivacyPolicy } from '../../services'

const renderRichText = (blocks) => {
    return blocks.map((block, index) => {
        const { children } = block;
        return (
            <p key={index} className="font-light !text-[rgba(62, 62, 62, 1)]">
                {children.map((child) => child?.text)}
            </p>
        );
    });
};

const PrivacyPolicyTemplate = async () => {
    const data = await getPrivacyPolicy();
    const privacyPolicies = data?.content?.map((policy) => ({
        title: policy?.title,
        policy: renderRichText(policy?.content)
    }))

    console.log('data', data);
    console.log('privacyPolicies', privacyPolicies);

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
                    privacyPolicies?.map((item, idx) => (
                        <div key={idx} className='content md:flex gap-10 mb-6'>
                            <h4 className='md:w-[25%] sm:text-xl md:text-[25px] font-bold text-theme-main font_calibri'>
                                {item?.title}
                            </h4>
                            <div className='md:w-[75%]'>
                                {item?.policy}
                            </div>
                        </div>
                    ))
                }
            </section>
        </>
    )
}

export default PrivacyPolicyTemplate