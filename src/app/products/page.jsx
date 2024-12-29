import { Axios } from '@/config/Axios';
import ProductsTemplate from '@/templates/products'
import qs from "qs"

async function getProducts() {
  const params = qs.stringify({
    populate: [
      'Image', "categories", "specific_category"
    ],
    pagination: {
      page: 1,    
      pageSize: 5
    }
  })


  const responce = await Axios.get(`/products?${params}`);
  const productLengthRes = await Axios.get(`/products`);
  const categories = await Axios.get(`/categories`);
  const specificCategorries = await Axios.get(`/specific-categories`);

  return {
    allProducts: responce.data,
    categories: categories?.data?.data,
    specificCategorries: specificCategorries?.data?.data,
    productLength: productLengthRes.data?.data.length
  }
}

const Products = async () => {
  const { allProducts, categories, specificCategorries, productLength } = await getProducts()

  return (
    <ProductsTemplate data={allProducts} categories={categories} specificCategorries={specificCategorries} />
  )
}

export default Products