import React from 'react'
import axios from 'axios'

const DeleteButton = ({id, successCallBack}) => {
    
    const deleteObj = e => {
        if (window.confirm("Are you sure you want to delete this player?")){
          axios.delete(`http://localhost:8000/api/players/${id}`)
            .then(res => successCallBack())
            .catch(err => console.log(err));
          }
        }

    return (
      <button className='btn btn-danger' onClick={deleteObj}>Delete</button>
    )
}

export default DeleteButton