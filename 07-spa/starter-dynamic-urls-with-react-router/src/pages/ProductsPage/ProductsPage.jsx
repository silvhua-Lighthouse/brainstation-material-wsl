// import './ProductsPage.scss';
import products from '../../data/products.json'
import { Link } from 'react-router-dom'

const ProductsPage = () => {
  
  return (
    <>
    <h1>Products Page</h1>
    {
      products.map( product => {
        return (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        )
      })
    }
    </>
  )
}

export default ProductsPage
