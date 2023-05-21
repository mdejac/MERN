import React from 'react'
import {useNavigate} from 'react-router-dom';

const Login = ({name, setName}) => {

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/chat/');
  }

  return (
    <div className='col-8 mx-auto border border-black p-4'>
        <h2 className='text-middle mb-5'>Get started right now!</h2>
        <form className='text-start' onSubmit={handleSubmit}>
            <div className='mb-4'>
                <label htmlFor="name">I want to start chatting as...</label>
            </div>
            <div className='row g-5 mb-5'>
              <div className='col-10'>
                <input className="form-control" type="text" id='name' value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div className="col-auto">
                <button className='btn btn-primary'>Start Chatting</button>
              </div>
            </div>
        </form>
    </div>
  )
}

export default Login