import React from 'react'
import {Link} from 'react-router-dom'

const HomeButton = () => {
  return (
    <Link className='btn btn-link' to={'/products'}>Home</Link>
  )
}

export default HomeButton