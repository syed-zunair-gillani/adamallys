// import Image from "next/image";

// const MapComponent = () => {
//     return (
//         <section className="min-h-[482px]">
//             <Image
//                 style={{
//                     objectFit: 'cover'
//                 }}
//                 src="/svg/contact-us-map.svg" alt="" className="w-full min-h-[482px]" width={1200} height={600} />
//         </section>
//     );
// };

// export default MapComponent;

import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Logo from '../header/logo';

const containerStyle = {
  width: '100%',
  height: '621px',
};

const center = {
  lng: 55.36945660323751,
  lat: 25.22633477584369,
};

const MapComponent = () => {
  const [selected, setSelected] = useState(null);

  const onSelect = useCallback(marker => {
    setSelected(marker);
  }, []);

  return (
    <LoadScript
      googleMapsApiKey=""
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker
          position={center}
          onClick={() => onSelect(center)}
        />
        {selected ? (
          <InfoWindow
            position={selected}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <Logo />
              <div className="mt-2">
                <p className='text-theme-main text-[24px] font-bold !m-0'>Adamallys LLC</p>
                <p className='text-theme-main !m-0'>Leading Ship Chandler & Marine Stores Supply Specialist.</p>
              </div>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;

