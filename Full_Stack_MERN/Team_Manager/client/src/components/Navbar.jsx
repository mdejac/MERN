import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='text-start ms-5 mb-5'>
        <Link className='btn btn-link ms-5' to={'/players'}>Manage Players</Link> |
        <Link className='btn btn-link' to={'/status/game/1'}>Manage Player Status</Link>
    </div>
  )
}

export default Navbar