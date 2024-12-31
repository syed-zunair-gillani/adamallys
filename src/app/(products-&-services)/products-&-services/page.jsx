import { getShipSupply } from '@/services';
import ProductsAndServicesTemplate from '@/templates/ProductsAndServices/ShipSupply'

const ProductsAndServices = async () => {
    const data = await getShipSupply();
    return <ProductsAndServicesTemplate {...data} />
}

export default ProductsAndServices