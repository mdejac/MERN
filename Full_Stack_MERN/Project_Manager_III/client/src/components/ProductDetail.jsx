import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'

const ProductDetail = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, []);

    const deleteProduct = id => {
      axios.delete(`http://localhost:8000/api/products/${id}`)
          .then(navigate('/products'))
          .catch(err => console.log(err));
  };

  return (
    <div className='App'>
        <h1>ProductDetail</h1>
        <p>Product name: {product.title}</p>
        <p>Product price: ${product.price}</p>
        <p>Product description: {product.description}</p>
        <span>
          <Link className='btn btn-link' to="/products">Home</Link> |
          <button className='btn btn-link' onClick={e => deleteProduct(product._id)}>Delete</button>
        </span>
    </div>
  )
}

export default ProductDetail