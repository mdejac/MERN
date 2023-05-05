import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const UpdateProduct = () => {

    const {id} = useParams();
    const [productInfo, setProductInfo] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProductInfo({title:res.data.title, price: res.data.price, description: res.data.description}))
            .catch(err => console.log(err));
    }, []);

    const updateProduct = e => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/products/edit/${id}`, productInfo)
            .then(res => navigate('/products'))
            .catch(err => console.log(err));
    }

    const handleInput = e => {
        setProductInfo({...productInfo, [e.target.id]: e.target.value});
    }

    return (
        <div className='App'>
            <h1>Update Product Page</h1>
            <form className='col-md-4 mx-auto mt-5' onSubmit={updateProduct}>
                <div className="form-group mb-2">
                    <label htmlFor="title">Title:</label>
                    <input className='form-control' type="text" value={productInfo.title} id='title' onChange={handleInput} required/>
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="price">Price:</label>
                    <input className='form-control' type="number" step='0.01' min='0' value={productInfo.price} id='price' onChange={handleInput} required/>
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="description">Description:</label>
                    <input className='form-control' type="text" value={productInfo.description} id='description' onChange={handleInput} required/>
                </div>

                <input type='submit' className='btn btn-primary mt-1' value='Update Product Info' />
            </form>
        </div>
    )
}

export default UpdateProduct