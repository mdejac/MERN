import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const ProductDetail = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, []);

  return (
    <div className='App'>
        <h1>ProductDetail</h1>
        <p>Product name: {product.title}</p>
        <p>Product price: ${product.price}</p>
        <p>Product description: {product.description}</p>
        <Link to="/products">Home</Link>
    </div>
  )
}

export default ProductDetail