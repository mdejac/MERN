import React, { useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const PersonList = ({people, setPeople}) => {
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res => setPeople(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
      <div>
        {people.map(person => (
          <div>
            <p key={person._id}>{person.lastName}, {person.firstName}</p>
            <Link to={`/people/${person._id}`} > {person.firstName}'s Page!</Link>
          </div>
          ))}
      </div>
    )
}

export default PersonList;