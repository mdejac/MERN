import React, {useEffect, useState} from 'react';
import axios from 'axios';
import EditButton from './buttons/EditButton';
import DeleteButton from './buttons/DeleteButton';
import AddButton from './buttons/AddButton'

const DisplayAuthors = () => {

    const [allAuthors, setAllAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAllAuthors(res.data))
            .catch(err => console.log(err));
    }, []);

    const removeFromDom = id => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => setAllAuthors(allAuthors.filter(a => a._id !== id)))
            .catch(err => console.log(err));
    }
    
    return (
        <div className='App'>
            <AddButton/>
            <p>Current author List:</p>
            <div className='container'>
                <table className='table table-striped table-bordered align-middle'>
                    <thead>
                        <th>Author</th>
                        <th>Actions</th>
                    </thead>
                    <tbody className='table-group-divider'>
                        {allAuthors.sort((a,b) => a.name.localeCompare(b.name)).map(author => (
                            <tr key={author._id}>
                                <td>{author.name}</td>
                                <td><EditButton id={author._id}/> | <DeleteButton id={author._id} successCallBack={() => removeFromDom(author._id)}/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>  
            </div>
        </div>
    )
}

export default DisplayAuthors