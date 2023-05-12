import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams, Link} from 'react-router-dom';
import Form from '../components/Form';
import AddButton from '../components/AddButton';
import CancelButton from '../components/CancelButton';
import Navbar from '../components/Navbar';

const EditView = () => {

  const {id} = useParams();
  const [objInfo, setObjInfo] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      axios.get(`http://localhost:8000/api/players/${id}`)
          .then(res => {
              console.log(res.data);
              setObjInfo(res.data);
              setLoaded(true);
          })
          .catch(err => console.log(err));
  }, []);

  const editObj = data => {
      console.log('Update player info', data);
      axios.patch(`http://localhost:8000/api/players/${id}/edit`, data)
          .then(res => navigate('/players'))
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
    <div>
        <Navbar/>
        {loaded && (
            <>
                {!objInfo?.reason ? (
                    <>
                        {errors.map((err, index) => <p key={index}>{err}</p>)}
                        <Form title={"Edit Player"} initialState={objInfo} onSubmitProps={editObj} errors={errors} />
                    </>
                    ):(
                    <>
                        <p>We're sorry, but we could not find the player you are looking for.</p>
                        <p>Would you like to add an player to the database?</p>
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

export default EditView