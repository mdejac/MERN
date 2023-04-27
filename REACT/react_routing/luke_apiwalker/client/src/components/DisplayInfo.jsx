import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom'

import obiwanPic from '../not-the-droids-photo.jpeg';

const DisplayInfo = () => {
    const [responseData, setResponseData] = useState(null);
    const [homeWorld, setHomeWorld] = useState(null);
    const [planetId, setPlanetId] = useState(null);
    const {searchType, id} = useParams();

    useEffect(() => {
        console.log(id);
        axios.get(`https://swapi.dev/api/${searchType}/${id}`)
        .then(res => {
            console.log(res.data);
            setResponseData(res.data);
        })
        .catch(err => {
            console.log(err);
            setResponseData(null);
        });
    },[searchType,id]);

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
        switch (searchType) {
            case "people" :           
                return ( <div>
                            <h1>{responseData.name}</h1>
                            <p>Height: {responseData.height}cm</p>
                            <p>Weight: {responseData.mass}kg</p>
                            <p>Hair color: {responseData.hair_color}</p>
                            <p>Eye color: {responseData.eye_color}</p>
                            <p>Birth year: {responseData.birth_year}</p>
                            <p>Planet name: <Link to ={`/planets/${planetId}`} >{homeWorld} </Link></p>
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
            {responseData ? renderOutput() : <div><h1>These aren't the droids you're looking for.</h1> <img src={obiwanPic} alt="obi wan"/></div>}
        </div>
    )
}

export default DisplayInfo