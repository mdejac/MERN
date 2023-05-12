import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import StatusButtons from '../components/StatusButtons'

const GameView = () => {

    const {gameNumber} = useParams();
    const [allObjects, setAllObjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setAllObjects(res.data))
            .catch(err => console.log(err));
    }, [gameNumber]);

    return (
        <div>
            <Navbar/>
            <div className='container border border-black p-3'>
                <h2 className='text-start'>Player Status - Game {gameNumber}</h2>
                <div className='text-center'>
                    <Link className='mx-2' to={`/status/game/1`}>Game 1</Link> |
                    <Link className='mx-2' to={`/status/game/2`}>Game 2</Link> |
                    <Link className='mx-2' to={`/status/game/3`}>Game 3</Link>
                </div>
                <div className='container border border-black mt-3 p-4'>
                    <table className='table table-striped table-bordered align-middle'>
                        <thead>
                            <th>Name</th>
                            <th className='text-center'>Game Status</th>
                        </thead>
                        <tbody className='table-group-divider'>
                            {allObjects.sort((a,b) => a.name.localeCompare(b.name)).map(obj => (
                                <tr key={obj._id}>
                                    <td><Link to={`/players/${obj._id}/edit`}>{obj.name}</Link></td>
                                    <td><StatusButtons gameNumber={gameNumber} obj={obj}/></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>  
                </div>
            </div>
        </div>
    )
}

export default GameView