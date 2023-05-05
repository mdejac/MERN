import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const Update = () => {

    const {id} = useParams();
    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/people/${id}`)
            .then(res => setUserInfo({firstName: res.data.firstName, lastName: res.data.lastName}))
    }, []);

    const updatePerson = e => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/people/${id}`, userInfo)
            .then(res => navigate('/people'))
            .catch(err => console.log(err));
    }

    const handleInput = e => {
        setUserInfo({...userInfo, [e.target.id]:e.target.value});
    }

    return (
        <div className='App'>
            <h1>Update User Info</h1>
            <form onSubmit={updatePerson}>
                <div className='form-group'>
                    <label htmlFor='firstName'>FirstName</label>
                    <input type='text' value={userInfo.firstName} id='firstName' onChange={handleInput} />
                </div>

                <div className='form-group'>
                    <label htmlFor='lastName'>FirstName</label>
                    <input type='text' value={userInfo.lastName} id='lastName' onChange={handleInput} />
                </div>

                <input type='submit' className='btn btn-primary' value='Update Info' />
            </form>
        </div>
    )
}

export default Update