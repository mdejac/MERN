import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams, Link} from 'react-router-dom';
import ProductForm from './ProductForm'
import DeleteButton from './DeleteButton';
import HomeButton from './HomeButton';

const UpdateProduct = () => {

    const {id} = useParams();
    const [productInfo, setProductInfo] = useState({});
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProductInfo(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err));
    }, []);

    const updateProduct = product => {
        axios.patch(`http://localhost:8000/api/products/edit/${id}`, product)
            .then(res => navigate('/products'))
            .catch(err => console.log(err));
    }

    return (
        <div className='App'>
            <h1>Update Product Page</h1>
            {
                loaded && (
                <>
                    <ProductForm onSubmitProp={updateProduct} initialState={productInfo} />
                    <DeleteButton id={productInfo._id} successCallBack={() => navigate('/products')} />
                    <HomeButton/>
                </>
                )
            }
        </div>
    )
}

export default UpdateProduct