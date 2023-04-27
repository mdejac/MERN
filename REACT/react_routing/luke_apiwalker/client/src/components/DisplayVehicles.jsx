import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'

const DisplayVehicles = () => {
    const {id} = useParams();
    const [responseData, setResponseData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(id);
        axios.get(`https://swapi.dev/api/vehicles/${id}`)
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
                <p>Model: {responseData.model}</p>
                <p>Manufacturer: {responseData.manufacturer}</p>
                <p>Crew members: {responseData.crew}</p>
                <p>Passenger capacity: {responseData.passengers}</p>
                <p>Cargo Capacity: {responseData.cargo_capacity}</p>
            </div> )
    }
    
    return (
        <div className="d-flex mt-5 justify-content-center">
            {responseData ? renderOutput() : ""}
        </div>
    )
}


export default DisplayVehicles