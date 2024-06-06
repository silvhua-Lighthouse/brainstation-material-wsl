// import './ProductsPage.scss';
import products from '../../data/products.json'

const ProductsPage = () => {
  
  return (
    <>
    <h1>Products Page</h1>
    {
      products.map( product => {
        return (
          <li key={product.id}>
            {product.name}
          </li>
        )
      })
    }
    </>
  )
}

export default ProductsPage
