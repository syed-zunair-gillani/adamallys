import Accordion from '@/components/Accordion'
import GridBanner from '@/components/hero/grid-banner'
import IndustrialEnergyComp from '@/components/IndustrialEngery'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import OtherServices from "@/components/other-services-slider/OtherServices"

const IndustrialEnergy = (props) => {
  const { title, info, video_title, Video, Our_Key_Product_Offerings } = props;
  const data = Our_Key_Product_Offerings?.map?.((offer) => (
    {
      title: offer?.title,
      content: offer?.info
    }
  ))
  return (
    <>
      <div className="mb-24" />
      <section>
        <div>
          <h1 className="text-center text-2xl pb-8 md:pt-8 sm:text-[40px] font_calibri md:leading-[50px] md:text-[50px] lg:text-[60px] font-bold text-[#2E368F] px-4">
            Products & Services
          </h1>
        </div>
        <GridBanner />
      </section>
      <section className="mt-14 container mx-auto px-3 flex flex-col lg:flex-row gap-5 lg:gap-10 mb-10 lg:mb-20">
        <div className='lg:w-[30%] min-w-[464px]'>
          <IndustrialEnergyComp
            caption={video_title}
            image={Video?.data?.attributes?.url}
          />
        </div>
        <div className='lg:w-[70%]'>
          <h2 className='text-[60px] leading-[67px] font-bold text-theme-main'>{title}</h2>
          <p className="text-lg font-light leading-[26px] py-[17px]">
            {info}
          </p>
          <p className="text-[40px] leading-[45px] text-theme-main">Our Key Product Offerings</p>
          <div className='my-[30px] w-full h-[1px] bg-[#B2B6E0]' />
          <Accordion data={data} isFirstOpen />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam inventore eius dolore. Deserunt dolore amet temporibus fugiat ut, ducimus culpa tenetur porro sint dignissimos vero iste illo dolores possimus quam quod hic quidem sit. Atque earum, ratione ea dolorum error, eius aut consectetur explicabo commodi magnam dolor quaerat facilis magni suscipit iste! Laudantium placeat voluptatum odit eos harum ratione explicabo porro incidunt? Distinctio quisquam facilis rerum repudiandae veritatis, perferendis a, ratione, voluptates obcaecati doloremque tempore hic neque suscipit cum nihil consequatur minus magni ut. Placeat ipsum fuga dolore fugiat enim in quidem dolorem dolorum veniam, quis quam. Minus maiores quos repudiandae mollitia architecto, repellendus assumenda distinctio reiciendis eligendi suscipit minima omnis similique? Recusandae incidunt nisi repellat aperiam a ratione ex, officia nesciunt, ad expedita consequatur, laboriosam rem dolores. Accusantium laborum, praesentium aut dolor, pariatur sint dolorem veniam repellendus placeat, magnam aliquam commodi quidem voluptas eius nisi nulla itaque corrupti quia maxime beatae quae odio repellat officia vero. Obcaecati eveniet, sapiente accusamus possimus blanditiis placeat temporibus doloribus quam nulla consectetur laborum cum iusto dolorum optio. Iste similique iure delectus cum recusandae repellendus doloremque numquam neque vel ratione. Fugiat neque sequi perspiciatis magni aperiam, voluptatem architecto hic et sunt inventore maiores ratione ut impedit quos iusto ex debitis odio optio, expedita assumenda obcaecati modi. Cumque, reprehenderit. Totam in praesentium at consequatur, voluptas, sed illum pariatur quae fuga a blanditiis saepe incidunt soluta provident reprehenderit quo, omnis inventore minus officiis vel eos. Error, temporibus. Porro maiores asperiores veritatis ratione iure corporis vitae nobis ex nam possimus sunt provident neque harum labore, error ut dolores quasi explicabo enim! Praesentium corrupti omnis in fugiat repudiandae, perspiciatis cupiditate aut error rem exercitationem, iste accusamus et, asperiores labore sed. Temporibus distinctio est beatae eligendi culpa nisi quaerat non repudiandae facilis qui deleniti molestias, expedita ullam perferendis in natus quae quos! Ipsam, soluta expedita ex minima quisquam dicta nesciunt sapiente officiis distinctio ducimus totam minus voluptate libero sint vitae mollitia nemo corrupti et repellendus temporibus unde. Molestias error ullam eum unde impedit odit saepe ut dolorem quis atque. Quos nihil enim quaerat tenetur totam, officiis, magni quibusdam fuga voluptas, voluptatum aliquam sint libero sequi autem reiciendis quo optio facilis voluptate non nobis eligendi laboriosam minima! Culpa corporis, iure non nulla repellat repellendus, quae beatae ut omnis suscipit in. Optio magni atque, odit voluptatum quibusdam consectetur nam voluptatem, dicta sit officiis fugit? Hic deserunt, expedita quia nesciunt quisquam saepe!
        </div>
      </section>
      <ChooseAdamallys />
      <OtherServices />
    </>
  )
}

export default IndustrialEnergy