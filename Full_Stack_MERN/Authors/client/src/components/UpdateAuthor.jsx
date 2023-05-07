import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import AuthorForm from './AuthorForm'
import CancelButton from './buttons/CancelButton';
import AddButton from './buttons/AddButton';

const UpdateAuthor = () => {

    const {id} = useParams();
    const [authorInfo, setAuthorInfo] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res.data);
                setAuthorInfo(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    const updateAuthor = author => {
        console.log('Update author info', author);
        axios.patch(`http://localhost:8000/api/authors/edit/${id}`, author)
            .then(res => navigate('/authors'))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    }

    return (
        <div className='App'>
            <p>Edit this Author</p>
            {loaded && (
                <>
                    {!authorInfo?.reason ? (
                        <>
                            {errors.map((err, index) => <p key={index}>{err}</p>)}
                            <AuthorForm initialState={authorInfo} onSubmitProp={updateAuthor} />
                        </>
                        ):(
                        <>
                            <p>We're sorry, but we could not find the author you are looking for.</p>
                            <p>Would you like to add an author to the database?</p>
                            <AddButton/>
                            <CancelButton/>
                        </>
                        )
                    }
                </>
                )
            }
        </div>
    )
}

export default UpdateAuthor