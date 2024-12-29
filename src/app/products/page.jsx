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
  const categories = await Axios.get(`/categories`);
  const specificCategorries = await Axios.get(`/specific-categories`);

  return {
    allProducts: responce.data,
    categories: categories?.data?.data,
    specificCategorries: specificCategorries?.data?.data
  }
}

const Products = async () => {
  const { allProducts, categories, specificCategorries } = await getProducts()
  console.log("🚀 ~ Products ~ allProducts:", allProducts.data[0].Image)

  return (
    <ProductsTemplate data={allProducts} categories={categories} specificCategorries={specificCategorries}/>
  )
}

export default Products