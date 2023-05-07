import React from 'react'
import {Link} from 'react-router-dom'

const EditButton = ({id}) => {
    
  return (
    <Link className='btn btn-link' to={`/authors/edit/${id}`}>Edit</Link>
  )
  
}

export default EditButton