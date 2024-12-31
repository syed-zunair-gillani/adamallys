import LeadingPageBanner from '@/components/digitalization/Leadingpage'
import PageNavigation from "@/components/page-navigation/PageNavigation"
import OtherServices from '@/components/other-services-slider/OtherServices'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import TwoColumnContent from "@/components/two-column-content/two-column-content"
import {
  HAVCPoints,
  dryDockingServiceBannerData,
} from '@/consts/shipSupply';

const DryDockingServiceTemplate = () => {
  return (
    <main className=''>
      <div className="mb-20" />
      <div>
        <h1 className="text-center text-2xl py-12 sm:text-[40px] font_calibri md:leading-[50px] md:text-[50px] lg:text-[60px] font-bold text-[#2E368F] mt-5 px-4">
          Ship Supply
        </h1>
      </div>
      <PageNavigation />
      <LeadingPageBanner
        {...dryDockingServiceBannerData}
      />
      <div className=""></div>
      <div className="mt-[72px]">
        <TwoColumnContent
          title={"Onboard Inspections and Technical Assessments"}
          image={"/images/ship-supply/onboard-inspections-image.png"}
          caption={"Our team of technical specialists works exclusively at Dubai Dry Docks, conducting detailed onboard inspections. By collecting samples and evaluating vessel requirements, we provide accurate assessments of the spare parts and equipment necessary for repair or replacement during the dry docking process. This allows us to quickly revert with prompt and precise quotations tailored to each vessel’s unique needs."}
        />
      </div>
      <TwoColumnContent
        invert
        bgGray
        image={"/images/ship-supply/proximity-image.png"}
        title={"Proximity to Dubai Dry Docks for Speedy Service"}
        caption={"Proximity to Dubai Dry Docks for Speedy ServiceSituated just 10 minutes from Dubai Dry Docks, Adamallys LLC is strategically positioned to deliver parts and equipment with minimal delay. This proximity enables us to provide faster turnaround times than most suppliers, ensuring that your vessel spends as little time in dry dock as possible. Our location allows us to deliver essential components swiftly, reducing operational downtime and facilitating a seamless dry docking experience."}
      />
      <TwoColumnContent
        image={"/images/ship-supply/inventory-image.png"}
        title={"Comprehensive Inventory for All Marine Needs"}
        caption={"Adamallys maintains an extensive inventory of technical marine stores, ensuring that we can meet the diverse and urgent needs of vessels during dry docking. From critical mechanical components to marine-grade equipment, we provide everything required to get your vessel back in optimal working condition. Our vast stock ensures that once we identify the necessary items, we can supply them promptly, minimizing wait times."}
      />
      <TwoColumnContent
        bgGray
        invert
        points={HAVCPoints}
        title='Customized Solutions & Delivery'
        image={"/images/ship-supply/customized-solutions-image.png"}
        caption='After performing onboard assessments, we promptly return with detailed quotes and supply the required parts from our comprehensive inventory. Our process is designed for efficiency, offering tailored solutions that align with the specific requirements of each vessel. By working closely with our team stationed at Dubai Dry Docks and leveraging our nearby facilities, we ensure that all parts and equipment are sourced, delivered, and installed as quickly as possible.'
      />
      <ChooseAdamallys
        description={'At Adamallys LLC, we pride ourselves on our ability to source and supply high-quality spare parts from reputable manufacturers across the globe. Our extensive stock ensures fast and reliable delivery, minimizing vessel downtime and operational interruptions. Whether you need critical engine spares or essential deck machinery parts, Adamallys is committed to providing the right solutions tailored to the needs of the maritime industry.'}
      />
      <OtherServices />
    </main>
  )
}

export default DryDockingServiceTemplate