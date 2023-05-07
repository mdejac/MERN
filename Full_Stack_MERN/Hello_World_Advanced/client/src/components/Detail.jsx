import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom';

const Detail = () => {

    const {id} = useParams();
    const [person, setPerson] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/people/${id}`)
            .then(res => {
                console.log(res.data);
                setPerson(res.data)
            })
            .catch(err => console.log(err));
    },[]);
  
  
    return (
      <div className='App'>
        <p>First Name: {person.firstName}</p>
        <p>Last Name: {person.lastName}</p>
        <Link to="/people">Home</Link>
      </div>
    )
}

export default Detail