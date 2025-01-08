import Image from "next/image";

const MapComponent = () => {
    return (
        <section className="min-h-[482px]">
            <Image
                style={{
                    objectFit: 'cover'
                }}
                src="/svg/contact-us-map.svg" alt="" className="w-full min-h-[482px]" width={1200} height={600} />
        </section>
    );
};

export default MapComponent;
