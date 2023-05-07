import React, { useState } from 'react'
import CancelButton from './buttons/CancelButton';

const AuthorForm = ({initialState, onSubmitProp}) => {

    const [formData, setFormData] = useState(initialState);

    const handleInput = e => {
        setFormData({...formData, [e.target.id]:e.target.value});
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp(formData);
    }

    return (
        <div className='row'>
            <form className='col-md-4 mx-auto border border-black py-5' onSubmit={onSubmitHandler}>
                <div className="form-group mb-2">
                    <label className='mx-2' htmlFor="name">Name :</label>
                    <input type="text" id='name' value={formData.name} onChange={handleInput} />
                </div>
                <CancelButton/>
                <button className='btn btn-primary ms-5' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AuthorForm