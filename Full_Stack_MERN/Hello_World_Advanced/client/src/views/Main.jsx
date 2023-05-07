import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonForm from "../components/PersonForm";
import PersonList from "../components/PersonList";

const Main = () => {
    
    const [peopleList, setPeopleList] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:8000/api/people')
            .then(res => setPeopleList(res.data))
            .catch(err => console.log(err));
    }, []);
    
    const removeFromDom = id => {
        axios.delete(`http://localhost:8000/api/people/${id}`)
            .then(res => setPeopleList(peopleList.filter(p => p._id !== id)))
            .catch(err => console.log(err));
    }

    const createPerson = personData => {
        axios.post('http://localhost:8000/api/people', personData)
            .then(res => setPeopleList([...peopleList, res.data]))
            .catch(err => console.log(err));
    }

    return (
        <div className="App">
            <PersonForm initialState={{firstName:"", lastName:""}} onSubmitProp={createPerson} />
            <PersonList peopleList={peopleList} setPeopleList={setPeopleList} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main