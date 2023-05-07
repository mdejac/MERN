import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = () => {
  
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, [])
  
    const removeFromDom = id => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => setProducts(products.filter(p => p._id !== id)))
            .catch(err => console.log(err));
    }

    const createProduct = data => {
        axios.post('http://localhost:8000/api/products', data)
            .then(res => {
                setProducts([...products, res.data])
                setErrors([]);
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    }

    return (
        <div className='App'>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <ProductForm initialState={{title: "", price: 0.00, description: ""}} onSubmitProp={createProduct} />
            <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main