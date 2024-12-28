import Tags from "@/components/tags/tags"
import GridContent from '@/components/grid-content'
import LeadingPageBanner from '@/components/digitalization/Leadingpage'
import PageNavigation from "@/components/page-navigation/PageNavigation"
import OtherServices from '@/components/other-services-slider/OtherServices'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import OneColumnContent from '@/components/one-column-content/two-column-content'
import TwoColumnContent from "@/components/two-column-content/two-column-content"
import ThreeColumnContent from "@/components/three-column-content/three-column-content"
import {
  cabinStoresPoints,
  chemicalsGasesPoints,
  deckStores,
  electricalStoresPoints,
  engineStorePoints,
  galleyStoresPoints,
  lsaPoints,
  marineRopesPoints,
  marineValvesPoints,
  medicalStoresPoints,
  safetyStoresPoints,
  stationaryPoints,
  steelMaterialsPoints,
  technicalMarineStoresBannerData
} from '@/consts/shipSupply';

const TechnicalMarineStoresTemplate = () => {
  return (
    <>
      <div className="mb-20" />
      <div>
        <h1 className="text-center text-2xl py-8 sm:text-[40px] font_calibri md:leading-[50px] md:text-[50px] lg:text-[60px] font-bold text-[#2E368F] mt-5 px-4">
          Ship Supply
        </h1>
      </div>
      <PageNavigation />
      <LeadingPageBanner
        {...technicalMarineStoresBannerData}
      />
      <Tags />
      <TwoColumnContent
        title={"Engine Stores"}
        points={engineStorePoints}
        image={"/images/ship-supply/engine-store-image.png"}
        caption={"We provide the full range of engine stores, essential for maintaining the mechanical systems of a ship. This includes:"}
      />
      <TwoColumnContent
        invert
        bgGray
        points={deckStores}
        title={"Deck Stores"}
        image={"/images/ship-supply/deck-stores-image.png"}
        caption={"Our deck stores cover all essential equipment for deck operations. We provide a wide range of products, including:"}
      />
      <ThreeColumnContent
        title={'Cabin Stores'}
        points={cabinStoresPoints}
        image1={"/images/ship-supply/cabin-stores-one.png"}
        image2={"/images/ship-supply/cabin-stores-two.png"}
        caption={'Our cabin stores provide everything needed for crew comfort and hygiene. We offer:'}
      />
      <TwoColumnContent
        bgGray
        isCustomBasis
        bgColor={"#E0E2FB"}
        title='Galley Stores'
        points={galleyStoresPoints}
        image={"/images/ship-supply/gallery-stores.png"}
        caption='We supply a full range of galley stores to meet the kitchen and food preparation needs on board, including:'
      />
      <OneColumnContent
        leftTitle
        points={marineValvesPoints}
        title={'Marine Valves & Ship Side Valves'}
        image={"/images/ship-supply/marine-valves.png"}
        caption={'We provide a comprehensive range of valves, adhering to international standards (DIN, JIS) for fluid and gas control:'}
      />
      <TwoColumnContent
        bgGray
        title='Marine Ropes'
        points={marineRopesPoints}
        image={"/images/ship-supply/marine-ropes.png"}
        caption='Our marine ropes come with the necessary certifications to meet the highest safety and operational standards:'
      />
      <TwoColumnContent
        bgGray
        invert
        title='Mooring Rope'
        points={marineRopesPoints}
        image={"/images/ship-supply/mooring-rope.png"}
        caption='Our mooring ropes are fully certified and meet the latest MEG4 (Mooring Equipment Guidelines) standards. We provide:'
      />
      <ThreeColumnContent
        title={'Safety Stores'}
        points={safetyStoresPoints}
        image1={"/images/ship-supply/safety-stores-image1.png"}
        image2={"/images/ship-supply/safety-stores-image2.png"}
        caption={'Safety is paramount, and we offer a wide range of safety products, including:'}
      />
      <TwoColumnContent
        title={"Electrical Stores"}
        points={electricalStoresPoints}
        image={"/images/ship-supply/electrical-stores.png"}
        caption={"We supply a full range of electrical components, ensuring proper functionality of marine electrical systems:"}
      />
      <ThreeColumnContent
        title={'Stationary'}
        points={stationaryPoints}
        image1={"/images/ship-supply/stationary-one.png"}
        image2={"/images/ship-supply/stationary-two.png"}
        caption={'Our stationery stores provide everything required for onboard administration, including:'}
      />
      <OneColumnContent
        points={lsaPoints}
        title={'LSA/FFA (Life-saving Appliances / Fire-fighting Appliances)'}
        image={"/images/ship-supply/lsa-image.png"}
        caption={'We provide all necessary life-saving and fire-fighting equipment to meet SOLAS regulations:'}
      />
      <GridContent
        data={[
          {
            bgGray: true,
            title: "Chemicals & Gases",
            points: chemicalsGasesPoints,
            caption: "We supply a full range of chemicals and gases for various applications, including:"
          },
          {
            title: "Steel Materials",
            points: steelMaterialsPoints,
            caption: "Our steel materials are suitable for shipbuilding and repairs:"
          }
        ]}
        images={["/images/ship-supply/chemicals-gases-image.png", "/images/ship-supply/steel-materials.png"]}
      />
      <TwoColumnContent
        bgGray
        isCustomBasis
        bgColor={"#E0E2FB"}
        title='Medicines and medical stores'
        points={medicalStoresPoints}
        image={"/images/ship-supply/medical-stores.png"}
        caption="Ensuring the crew's health is critical. We offer:"
      />
      <ChooseAdamallys />
      <OtherServices />
    </>
  )
}

export default TechnicalMarineStoresTemplate