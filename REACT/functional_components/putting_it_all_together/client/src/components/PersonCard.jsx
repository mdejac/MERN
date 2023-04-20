import React, {useState} from 'react';

const PersonCard = ({firstName, lastName, hairColor, ...props}) => {
    const [age, setAge] = useState(props.age);
    return (
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age : {age}</p>
            <p>Hair Color : {hairColor}</p>
            <button onClick={(e)=>setAge(age+1)}>Birthday button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard;