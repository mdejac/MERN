import React, { useState } from 'react'
import CancelButton from './CancelButton';

const Form = ({title, initialState, onSubmitProps, errors}) => {

    const [formData, setFormData] = useState(initialState);

    const handleInput = e => {
        setFormData({...formData, [e.target.id]:e.target.value});
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProps(formData);
    }

    return (
        <div className='row'>
            <form className='col-md-8 mx-auto border border-black p-3' onSubmit={onSubmitHandler}>
                <h2 className='text-start mb-4'>{title}</h2>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div className="row mb-2">
                    <label className='col-md-4 col-form-label' htmlFor="name">Name :</label>
                    <div className="col-md-8">
                        <input className='form-control' type="text" id='name' value={formData.name} onChange={handleInput} />
                    </div>
                </div>

                <div className="row mb-2">
                    <label className='col-md-4' htmlFor="perferredPosition">Perferred Position :</label>
                    <div className="col-md-8">
                        <input className='form-control' type="text" id='perferredPosition' value={formData.perferredPosition} onChange={handleInput} />
                    </div>
                </div>

                <div className="d-flex justify-content-evenly g-3">
                    <CancelButton/>
                    <button className='btn btn-success ms-5' disabled={formData.name.length < 2} type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form