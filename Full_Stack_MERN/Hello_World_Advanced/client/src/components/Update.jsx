import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams, Link} from 'react-router-dom';
import PersonForm from './PersonForm';
import DeleteButton from './DeleteButton';

const Update = () => {

    const {id} = useParams();
    const [personInfo, setPersonInfo] = useState({});
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/people/${id}`)
            .then(res => {
                setPersonInfo(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    const updatePerson = person => {
        axios.patch(`http://localhost:8000/api/people/${id}`, person)
            .then(res => navigate('/people'))
            .catch(err => console.log(err));
    }

    return (
        <div className='App'>
            <h1>Update User Info</h1>
            {
                loaded && (
                <>
                    <PersonForm onSubmitProp={updatePerson} initialState={{firstName:personInfo.firstName, lastName:personInfo.lastName}} />
                    <DeleteButton id={personInfo._id} successCallBack={() => navigate('/people')}/>
                    <Link className='btn btn-link' to={'/people'}>Cancel</Link>
                </>
                )
            }
        </div>
    )
}

export default Update