import React, {useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ProductList = ({products, setProducts}) => {


    useEffect(() =>{
        axios.get('http://localhost:8000/api/products')
        .then(res => setProducts(res.data))
        .catch(err => console.log(err));
    }, []);

    const deleteProduct = id => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => setProducts(products.filter(p => p._id !== id)))
            .catch(err => console.log(err));
    };

    return (
        <div className='mt-5'>
            <hr/>
            <h1>Product List</h1>
            {products.map(p => (
                <div>
                    <span>
                        <Link className='btn btn-link' to={`/products/${p._id}`}>{p.title}</Link>  |  
                        <Link className='btn btn-link' to={`/products/edit/${p._id}`}> Edit</Link>  |
                        <button className='btn btn-link' onClick={e => deleteProduct(p._id)}>Delete</button>
                    </span>
                </div>
            ))}
        </div>
    )
}

export default ProductList