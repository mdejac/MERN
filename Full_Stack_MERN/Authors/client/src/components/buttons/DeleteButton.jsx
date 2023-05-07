import React from 'react'
import axios from 'axios'

const DeleteButton = ({id, successCallBack}) => {
    
    const deleteObj = e => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => successCallBack())
            .catch(err => console.log(err));
    }

    return (
      <button className='btn btn-danger' onClick={deleteObj}>Delete</button>
    )
}

export default DeleteButton