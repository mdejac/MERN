import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';
import AddButton from '../components/AddButton'
import Navbar from '../components/Navbar';

const IndexView = () => {

  const [allObjects, setAllObjects] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8000/api/players')
          .then(res => setAllObjects(res.data))
          .catch(err => console.log(err));
  }, []);

  const removeFromDom = id => {
      setAllObjects(allObjects.filter(a => a._id !== id))
  }  

  return (
    <div>
        <Navbar/>
        <div className='container border border-black mx-auto p-4'>
            <h3 className="text-start">List | <AddButton/></h3>
            <table className='table table-striped table-bordered align-middle text-center'>
                <thead>
                    <th>Name</th>
                    <th>Perferred Position</th>
                    <th>Actions</th>
                </thead>
                <tbody className='table-group-divider'>
                    {allObjects.sort((a,b) => a.name.localeCompare(b.name)).map(obj => (
                        <tr key={obj._id}>
                            <td><Link className='btn btn-link' to={`/players/${obj._id}/edit`}>{obj.name}</Link></td>
                            <td>{obj.perferredPosition}</td>
                            <td><DeleteButton id={obj._id} successCallBack={() => removeFromDom(obj._id)}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>  
        </div>
    </div>
)
}

export default IndexView