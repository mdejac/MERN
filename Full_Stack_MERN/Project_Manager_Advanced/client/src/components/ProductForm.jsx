import React, {useState, useEffect} from 'react'


const ProductForm = ({initialState, onSubmitProp}) => {

    const [formData, setFormData] = useState(initialState)

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp(formData)
        setFormData(initialState);
    }

    const handleInput = e => {
        setFormData({...formData, [e.target.id]:e.target.value})    
    }

    return (
        <form className='col-md-4 mx-auto mt-5' onSubmit={onSubmitHandler}>
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