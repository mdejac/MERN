import React from 'react'
import {Link} from 'react-router-dom'

const CancelButton = () => {
  return (
    <Link className='btn btn-warning' to={'/authors'}>Cancel</Link>
  )
}

export default CancelButton