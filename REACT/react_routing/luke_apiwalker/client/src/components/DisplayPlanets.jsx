import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'

const DisplayPlanets = () => {
    const {id} = useParams();
    const [responseData, setResponseData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(id);
        axios.get(`https://swapi.dev/api/planets/${id}`)
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
                <h1>{responseData.name}</h1>
                <p>Climate: {responseData.climate}</p>
                <p>Terrain: {responseData.terrain}</p>
                <p>Population: {responseData.population}</p>
                <p>Rotation Period: {responseData.rotation_period} hours</p>
                <p>Orbital Period: {responseData.orbital_period} days</p>
            </div> )
    }
    
    return (
        <div className="d-flex mt-5 justify-content-center">
            {responseData ? renderOutput() : ""}
        </div>
    )
}


export default DisplayPlanets