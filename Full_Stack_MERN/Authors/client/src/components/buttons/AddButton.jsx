import React from 'react'
import {Link} from 'react-router-dom'

const AddButton = () => {
  return (
    <Link className='btn btn-link' to={'/authors/new'}>Add an Author</Link>
  )
}

export default AddButton