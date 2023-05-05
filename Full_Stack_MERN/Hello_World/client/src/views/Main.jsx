import React, { useState } from "react";
import PersonForm from "../components/PersonForm";
import PersonList from "../components/PersonList";

const Main = () => {
    
    const [people, setPeople] = useState([]);
    
    return (
        <div className="App">
            <PersonForm people={people} setPeople={setPeople}/>
            <PersonList people={people} setPeople={setPeople}/>
        </div>
    )
}

export default Main