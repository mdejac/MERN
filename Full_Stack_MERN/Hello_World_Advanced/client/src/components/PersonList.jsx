import React, { useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import DeleteButton from './DeleteButton'

const PersonList = ({peopleList, setPeopleList, removeFromDom}) => {
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res => setPeopleList(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
      <div>
        {peopleList.map(person => (
          <div key={person._id}>
            <Link className='btn btn-link' to={`/people/${person._id}`}>{person.firstName}'s Page!</Link> | 
            <Link className='btn btn-link' to={`/people/edit/${person._id}`}> Edit</Link> |
            <DeleteButton id={person._id} successCallBack={() => removeFromDom(person._id)} />
          </div>
          ))}
      </div>
    )
}

export default PersonList;