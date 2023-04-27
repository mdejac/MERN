import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'

const DisplayFilms = () => {
    const {id} = useParams();
    const [responseData, setResponseData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(id);
        axios.get(`https://swapi.dev/api/films/${id}`)
        .then(res => {
            console.log(res.data);
            setResponseData(res.data);
        })
        .catch(err => {
            console.log(err);
            navigate("/error");
        });
    },[id]);

    const renderOutput = () => {
        return ( 
            <div>
                <h1>{responseData.title}</h1>
                <p>Episode: {responseData.episode_id}</p>
                <p>Director: {responseData.director}</p>
                <p>Release Date: {responseData.release_date}</p>
            </div> )
    }
    
    return (
        <div className="d-flex mt-5 justify-content-center">
            {responseData ? renderOutput() : ""}
        </div>
    )
}


export default DisplayFilms