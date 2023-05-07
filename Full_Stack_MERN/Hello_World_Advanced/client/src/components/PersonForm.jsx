import React, {useState} from 'react';

const PersonForm = ({initialState, onSubmitProp}) => {

    const [formData, setFormData] = useState(initialState);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp(formData);
        setFormData(initialState);
    }

    const handleInput = e => {
        console.log(e.target.value);
        setFormData({...formData, [e.target.id]:e.target.value})    
    }

    return (
        <form className='col-md-4 mx-auto mt-5' onSubmit={onSubmitHandler}>
            <div className='form-group'>
                <label htmlFor="firstName">First Name :</label><br />
                <input type="text" value={formData.firstName} id="firstName" onChange={handleInput} />
            </div>
            <div className='form-group'>
                <label htmlFor="lastName">Last Name :</label><br />
                <input type="text" value={formData.lastName} id="lastName" onChange={handleInput} />
            </div>
            <input className='btn btn-primary mt-2' type="submit" value="Submit" />
        </form>
    )
}

export default PersonForm;