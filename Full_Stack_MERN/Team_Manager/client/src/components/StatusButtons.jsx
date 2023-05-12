import React, {useState, useEffect} from 'react'
import axios from 'axios';

const StatusButtons = ({gameNumber, obj}) => {

    const [state, setState] = useState("");

    useEffect(() => {
        const status = obj.gamesStatus.find(el => el.game==gameNumber)?.status;
        setState(status ? status : "");
    }, [gameNumber]);
    
    const handleClick = e => {
        setState(e.target.id)
        axios.patch(`http://localhost:8000/api/players/${obj._id}/status`, {game:gameNumber, status:e.target.id})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return (
    <div className='d-flex justify-content-around'>
        <button className='border border-black px-3 ' style={{backgroundColor:state==="Playing" ? "green" : "white", cursor:"pointer"}} id='Playing' onClick={handleClick}>Playing</button>
        <button className='border border-black px-3 ' style={{backgroundColor:state==="Not Playing" ? "red" : "white", cursor:"pointer"}} id='Not Playing' onClick={handleClick}>Not Playing</button>
        <button className='border border-black px-3 ' style={{backgroundColor:state==="Undecided" || state===""? "yellow" : "white", cursor:"pointer"}} id='Undecided' onClick={handleClick}>Undecided</button>
    </div>
  )
}

export default StatusButtons