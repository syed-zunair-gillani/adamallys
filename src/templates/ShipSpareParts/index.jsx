import LeadingPageBanner from '@/components/digitalization/Leadingpage'
import PageNavigation from "@/components/page-navigation/PageNavigation"
import OtherServices from '@/components/other-services-slider/OtherServices'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import OneColumnContent from '@/components/one-column-content/two-column-content'
import TwoColumnContent from "@/components/two-column-content/two-column-content"
import {
  HAVCPoints,
  marineValvesPoints,
  safetyEquipmentPoints,
  filtrationSystemsPoints,
  shipSparePartsDeckStores,
  auxiliaryEnginePartsPoints,
  electricalSystemPartsPoints,
  shipSparePartsRopesBannerData,
} from '@/consts/shipSupply';

const ShipSparePartsTemplate = () => {
  return (
    <>
      <div className="mb-20" />
      <div>
        <h1 className="text-center text-2xl py-12 sm:text-[40px] font_calibri md:leading-[50px] md:text-[50px] lg:text-[60px] font-bold text-[#2E368F] mt-5 px-4">
          Ship Supply
        </h1>
      </div>
      <PageNavigation />
      <LeadingPageBanner
        {...shipSparePartsRopesBannerData}
      />
      <div className="mt-[72px]">
        <TwoColumnContent
          title={"Main & Auxiliary Engine Parts"}
          points={auxiliaryEnginePartsPoints}
          image={"/images/ship-supply/auxiliary-engine-parts-image.png"}
          caption={"Main & Auxiliary Engine PartsEnsuring smooth and efficient engine operation is paramount for every vessel, and at Adamallys LLC, we provide a comprehensive range of spare parts for both main and auxiliary engines. These include:"}
        />
      </div>
      <TwoColumnContent
        invert
        bgGray
        points={shipSparePartsDeckStores}
        title={"Deck Stores"}
        image={"/images/ship-supply/ship-spare-parts-deck-stores.png"}
        caption={"Adamallys supplies an extensive range of spare parts for deck machinery, helping vessels maintain critical operations. These include:"}
      />
      <TwoColumnContent
        title={"Electrical System Parts"}
        points={electricalSystemPartsPoints}
        image={"/images/ship-supply/electrical-system-parts-image.png"}
        caption={"Adamallys LLC offers a full range of electrical spare parts to ensure the seamless operation of a vessel's power distribution and control systems:"}
      />
      <TwoColumnContent
        bgGray
        bgColor={"#E0E2FB"}
        title='Safety Equipment & LSA/FFA Spares'
        points={safetyEquipmentPoints}
        image={"/images/ship-supply/safety-equipment-image.png"}
        caption='Safety at sea is paramount, and we stock a comprehensive range of spare parts for Life-Saving Appliances (LSA) and Fire-Fighting Appliances (FFA), ensuring vessels remain compliant with international safety regulations:'
      />
      <OneColumnContent
        leftTitle
        points={marineValvesPoints}
        title={'Pumps & Valves'}
        image={"/images/ship-supply/marine-valves.png"}
        caption={'We provide a comprehensive range of valves, adhering to international standards (DIN, JIS) for fluid and gas control:'}
      />
      <TwoColumnContent
        bgGray
        invert
        title='HVAC & Refrigeration Parts'
        points={HAVCPoints}
        image={"/images/ship-supply/HVAC-image.png"}
        caption='We provide spare parts for heating, ventilation, air conditioning, and refrigeration systems, ensuring a comfortable and controlled environment on board:'
      />
      <TwoColumnContent
        bgGray
        title='Filtration Systems'
        points={filtrationSystemsPoints}
        image={"/images/ship-supply/filtration-systems-image.png"}
        caption='Proper filtration is essential for maintaining the health of engine and hydraulic systems. Adamallys provides:'
      />
      <ChooseAdamallys
        description={'At Adamallys LLC, we pride ourselves on our ability to source and supply high-quality spare parts from reputable manufacturers across the globe. Our extensive stock ensures fast and reliable delivery, minimizing vessel downtime and operational interruptions. Whether you need critical engine spares or essential deck machinery parts, Adamallys is committed to providing the right solutions tailored to the needs of the maritime industry.'}
      />
      <OtherServices />
    </>
  )
}

export default ShipSparePartsTemplate