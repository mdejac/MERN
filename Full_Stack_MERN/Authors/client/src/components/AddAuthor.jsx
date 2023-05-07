import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthorForm from './AuthorForm';

const AddAuthor = () => {
    
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res => {navigate('/authors')})
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
        <div className='App'>
            <p>Add a new author</p>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <AuthorForm initialState={{name:""}} onSubmitProp={createAuthor} />
        </div>
    )
}

export default AddAuthor