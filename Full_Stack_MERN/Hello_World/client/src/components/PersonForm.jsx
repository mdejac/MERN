import React, {useEffect, useState} from 'react';
import axios from 'axios';

const PersonForm = () => {
    const [formData, setFormData] = useState({
        firstName : "",
        lastName : ""
    });

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/people', formData)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label htmlFor="firstName">First Name :</label><br />
                <input type="text" onChange={e => setFormData({...formData, firstName : e.target.value })} />
            </p>
            <p>
                <label htmlFor="lastName">Last Name :</label><br />
                <input type="text" onChange={e => setFormData({...formData, lastName : e.target.value })} />
            </p>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default PersonForm;