import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Logo from '../header/logo';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    const position = [25.22633477584369, 55.36945660323751];

    return (
        <MapContainer
            zoom={13}
            center={position}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '621px' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    <Logo />
                    <div className="mt-2">
                        <p className='text-theme-main text-[24px] font-bold !m-0'>Adamallys LLC</p>
                        <p className='text-theme-main !m-0'>Leading Ship Chandler & Marine Stores Supply Specialist.</p>
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;
