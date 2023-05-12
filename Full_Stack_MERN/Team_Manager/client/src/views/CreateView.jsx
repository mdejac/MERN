import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';
import Form from '../components/Form'
import Navbar from '../components/Navbar';

const CreateView = () => {

  const initialState = {
    name: "",
    preferredPosition: ""
  }
  
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const createObj = data => {
      axios.post('http://localhost:8000/api/players', data)
          .then(res => {navigate('/players')})
          .catch(err => {
              const errorResponse = err.response.data.errors;
              const errorArr = [];
              for (const key of Object.keys(errorResponse)) {
                  errorArr.push(errorResponse[key].message);
              }
              setErrors(errorArr);
          });
  }

  return (
    <div>
        <Navbar/>
        <div className='container border border-black p-4'>
            <h3 className="text-start"><Link to={'/players'}>List</Link> | Add a Player</h3>
            <Form title={"Add Player"} initialState={initialState} onSubmitProps={createObj} errors={errors}/>
        </div>
    </div>
    
  )
}

export default CreateView