import React, {useState, useEffect} from 'react';
import axios from 'axios';
import obiwan from '../not-the-droids-photo.jpeg';
import {Link} from 'react-router-dom'

const DisplayInfo = ({searchInfo}) => {
    const [responseData, setResponseData] = useState(null);
    const [homeWorld, setHomeWorld] = useState(null);
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${searchInfo.searchType}/${searchInfo.id}`)
        .then(res => {
            console.log(res.data);
            setResponseData(res.data);
        })
        .catch(err => {
            console.log(err);
            setResponseData(null);
        });
    },[searchInfo]);

    const renderOutput = () => {
        switch (searchInfo.searchType) {
            case "people" :
                axios.get(`${responseData.homeworld}`).then(res => setHomeWorld(res.data.name));
                return ( <div>
                            <h1>{responseData.name}</h1>
                            <p>Height: {responseData.height}cm</p>
                            <p>Weight: {responseData.mass}kg</p>
                            <p>Hair color: {responseData.hair_color}</p>
                            <p>Eye color: {responseData.eye_color}</p>
                            <p>Birth year: {responseData.birth_year}</p>
                            <p>Planet name: <Link to ="" >{homeWorld} </Link></p>
                         </div> )
            case "planets" :
                return ( <div>
                            <h1>{responseData.name}</h1>
                            <p>Climate: {responseData.climate}</p>
                            <p>Terrain: {responseData.terrain}</p>
                            <p>Population: {responseData.population}</p>
                            <p>Rotation Period: {responseData.rotation_period} hours</p>
                            <p>Orbital Period: {responseData.orbital_period} days</p>
                         </div> )
            case "films" :
                return ( <div>
                            <h1>{responseData.title}</h1>
                            <p>Episode: {responseData.episode_id}</p>
                            <p>Director: {responseData.director}</p>
                            <p>Release Date: {responseData.release_date}</p>
                         </div> )
            case "starships" : case "vehicles" :
                return ( <div>
                            <h1>{responseData.name}</h1>
                            <p>Model: {responseData.model}</p>
                            <p>Manufacturer: {responseData.manufacturer}</p>
                            <p>Crew members: {responseData.crew}</p>
                            <p>Passenger capacity: {responseData.passengers}</p>
                            <p>Cargo Capacity: {responseData.cargo_capacity}</p>
                         </div> )
            case "species" :
                return ( <div>
                            <h1>{responseData.name}</h1>
                            <p>Classification: {responseData.classification}</p>
                            <p>Designation: {responseData.designation}</p>
                            <p>Average Height: {responseData.average_height}cm</p>
                            <p>Average Lifespan: {responseData.average_lifespan} years</p>
                         </div> )

        } 
    }

    return (
        <div className="d-flex mt-5 justify-content-center">
            {responseData ? renderOutput() : <div><h1>These aren't the droids you're looking for.</h1> <img src={obiwan} alt="obi wan"/></div>}
        </div>
    )
}

export default DisplayInfo