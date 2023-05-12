import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import CancelButton from '../components/CancelButton';
import EditButton from '../components/EditButton';
import DeleteButton from '../components/DeleteButton';

const DetailView = () => {

  const {id} = useParams();
  const [objInfo, setObjInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
      axios.get(`http://localhost:8000/api/players/${id}`)
          .then(res => setObjInfo(res.data))
          .catch(err => console.log(err));
  }, []);

  return (
    <div className='App'>
        <h1>ObjectDetail</h1>
        <p>Name: {objInfo.name}</p>
        <p>Preferred Position: {objInfo.preferredPosition}</p>
        <span>
          <CancelButton/>|
          <EditButton id={objInfo._id}/> |
          <DeleteButton id={objInfo._id} successCallBack={() => navigate('/players')} />
        </span>
    </div>
  )
}

export default DetailView