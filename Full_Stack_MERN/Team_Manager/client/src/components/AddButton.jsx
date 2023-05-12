import React from 'react'
import {Link} from 'react-router-dom'

const AddButton = () => {
  return (
    <Link className='btn btn-link' to={'/players/create'}>Add new player</Link>
  )
}

export default AddButton