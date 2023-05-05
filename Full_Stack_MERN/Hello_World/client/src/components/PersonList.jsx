import React, { useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const PersonList = ({people, setPeople}) => {
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res => setPeople(res.data))
            .catch(err => console.log(err))
    }, []);

    const deletePerson = id => {
      axios.delete(`http://localhost:8000/api/people/${id}`)
        .then(res => setPeople(people.filter(person =>person._id != id)))
        .catch(err => console.log(err))
    }

    return (
      <div>
        {people.map(person => (
          <div>
            <p key={person._id}>{person.lastName}, {person.firstName}</p>
            <Link to={`/people/${person._id}`}>{person.firstName}'s Page!</Link> | 
            <Link to={`/people/edit/${person._id}`}> Edit</Link> |
            <button onClick={e => deletePerson(person._id)}>Delete</button>
          </div>
          ))}
      </div>
    )
}

export default PersonList;