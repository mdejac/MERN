import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'

const DisplaySpecies = () => {
    const {id} = useParams();
    const [responseData, setResponseData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(id);
        axios.get(`https://swapi.dev/api/species/${id}`)
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
                <p>Classification: {responseData.classification}</p>
                <p>Designation: {responseData.designation}</p>
                <p>Average Height: {responseData.average_height}cm</p>
                <p>Average Lifespan: {responseData.average_lifespan} years</p>
            </div> )
    }
    
    return (
        <div className="d-flex mt-5 justify-content-center">
            {responseData ? renderOutput() : ""}
        </div>
    )
}


export default DisplaySpecies