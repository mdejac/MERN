import React, {useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import DeleteButton from './DeleteButton'

const ProductList = ({products, setProducts, removeFromDom}) => {

    useEffect(() =>{
        axios.get('http://localhost:8000/api/products')
        .then(res => setProducts(res.data))
        .catch(err => console.log(err));
    }, []);

    return (
        <div className='mt-5'>
            <hr/>
            <h1>Product List</h1>
            {products.map(p => (
                <div key={p._id}>
                    <span>
                        <Link className='btn btn-link' to={`/products/${p._id}`}>{p.title}</Link>  |  
                        <Link className='btn btn-link' to={`/products/edit/${p._id}`}> Edit</Link>  |
                        <DeleteButton id={p._id} successCallBack={() => removeFromDom(p._id)} />
                    </span>
                </div>
            ))}
        </div>
    )
}

export default ProductList