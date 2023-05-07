import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import DeleteButton from './DeleteButton'
import HomeButton from './HomeButton'

const ProductDetail = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

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
        <span>
          <HomeButton/>|
          <DeleteButton id={product._id} successCallBack={() => navigate('/products')} />
        </span>
    </div>
  )
}

export default ProductDetail