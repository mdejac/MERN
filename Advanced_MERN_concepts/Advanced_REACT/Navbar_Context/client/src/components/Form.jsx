import React, {useContext} from 'react'
import MyContext from '../context/MyContext';

const Form = () => {

    const context = useContext(MyContext);

    return (
        <form className='form'>
            <label htmlFor="name">Your Name : </label>
            <input type="text" id='name' onChange={e => context.setName(e.target.value)}/>
        </form>
    )
}

export default Form