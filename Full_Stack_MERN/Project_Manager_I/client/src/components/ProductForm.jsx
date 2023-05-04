import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ProductForm = () => {
    const initialFormData = {
        title: "",
        price: 0.00,
        description: ""
    }
    const [formData, setFormData] = useState(initialFormData)

    const createProduct = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', formData)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setFormData(initialFormData);
            })
            .catch(err => console.log(err))
    }

    const handleInput = e => {
        setFormData({...formData, [e.target.id]:e.target.value})    
    }

    return (
        <form className='col-md-4 mx-auto' onSubmit={createProduct}>
            <div className="form-group">
                <label htmlFor="title">Title :</label>
                <input className='form-control mt-2' type="text" id='title' value={formData.title} onChange={handleInput} required />
            </div>

            <div className="form-group">
                <label htmlFor="price">Price :</label>
                <input className='form-control mt-2' type="number" step="0.01" min="0" id='price' value={formData.price} onChange={handleInput} required />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description :</label>
                <input className='form-control mt-2' type="text" id='description' value={formData.description} onChange={handleInput} required />
            </div>

            <input className='btn btn-primary mt-2' type="submit" value="Add Product" />
        </form>
    )
}

export default ProductForm