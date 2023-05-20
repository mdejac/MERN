import React, {useContext} from 'react'
import MyContext from '../context/MyContext'

const Navbar = () => {

    const context = useContext(MyContext);

    return (
        <div className='navbar'>
            <p>Hi {context.name}</p>
        </div>
    )
}

export default Navbar