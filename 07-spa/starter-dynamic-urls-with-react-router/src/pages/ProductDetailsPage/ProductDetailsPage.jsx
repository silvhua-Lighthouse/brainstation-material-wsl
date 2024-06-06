// import './ProductDetailsPage.scss';
import products from '../../data/products.json'
import { Navigate, useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
    const paramHook = useParams();
    const {productId} = useParams();
    const product = products.find(product => product.id === productId);
    if (!product) {
        return <Navigate to="/products"></Navigate>
    }

    return (
        <>
        <h1>{product.name} {product.icon}</h1>
        <p>{product.description}</p>
        <p>Product ID: {product.id}</p>
        <p>{product.technicalSpecs}</p>
        </>
    )
}

export default ProductDetailsPage
