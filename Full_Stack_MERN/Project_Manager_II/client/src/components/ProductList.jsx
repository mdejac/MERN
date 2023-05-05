import React, {useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ProductList = ({products, setProducts}) => {


    useEffect(() =>{
        axios.get('http://localhost:8000/api/products')
        .then(res => setProducts(res.data))
        .catch(err => console.log(err));
    }, []);

    return (
        <div className='mt-5'>
            <hr/>
            <h1>ProductList</h1>
            {products.map(p => (
                <div>
                    <Link key={p._id} to={`/products/${p._id}`}>{p.title}</Link>
                </div>
            ))}
        </div>
    )
}

export default ProductList