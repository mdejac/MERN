import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams, useNavigate} from 'react-router-dom'

const DisplayPeople = () => {
    const {id} = useParams();
    const [responseData, setResponseData] = useState(null);
    const [homeWorld, setHomeWorld] = useState(null);
    const [planetId, setPlanetId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(id);
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(res => {
            console.log(res.data);
            setResponseData(res.data);
        })
        .catch(err => {
            console.log(err);
            navigate("/error");
        });
    },[id]);

    useEffect(() => {
        if (responseData?.homeworld){
            let planetId = responseData.homeworld.split("/")
            planetId = planetId[planetId.length-2]
            axios.get(`${responseData.homeworld}`)
            .then(res => {
                setHomeWorld(res.data.name);
                setPlanetId(planetId)
            })
            .catch(err => console.log(err));

        }
    }, [responseData]);

    const renderOutput = () => {
        return (
            <div>
                <h1>{responseData.name}</h1>
                <p>Height: {responseData.height}cm</p>
                <p>Weight: {responseData.mass}kg</p>
                <p>Hair color: {responseData.hair_color}</p>
                <p>Eye color: {responseData.eye_color}</p>
                <p>Birth year: {responseData.birth_year}</p>
                <p>Planet name: <Link to ={`/planets/${planetId}`} >{homeWorld} </Link></p>
            </div>
        )
    }
    
    return (
        <div className="d-flex mt-5 justify-content-center">
            {responseData ? renderOutput() : "" }
        </div>
    )
}


export default DisplayPeople