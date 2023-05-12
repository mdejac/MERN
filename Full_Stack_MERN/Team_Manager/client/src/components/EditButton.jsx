import React from 'react'
import {Link} from 'react-router-dom'

const EditButton = ({id}) => {
    
  return (
    <Link className='btn btn-warning' to={`/players/${id}/edit`}>Edit</Link>
  )
  
}

export default EditButton