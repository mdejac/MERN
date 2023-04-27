import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Form = ({searchInfo, setSearchInfo}) => {
  const navigate = useNavigate();
  const [formInfo, setFormInfo] = useState({
    searchType: searchInfo.searchType,
    id:searchInfo.id
  })

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/${formInfo.searchType}/${formInfo.id}`);
    setSearchInfo(formInfo);
  }

  return (
  <form onSubmit={handleSubmit} className="flex-center mt-5">
    <div>
      <label className="me-2" htmlFor="searchType">Search for: </label>
      <select name="searchType" id="searchType" onChange={e => setFormInfo({...formInfo, searchType:e.target.value})}>
        <option value="people">People</option>
        <option value="films">Films</option>
        <option value="starships">Starships</option>
        <option value="vehicles">Vehicles</option>
        <option value="species">Species</option>
        <option value="planets">Planets</option>
      </select>
    </div>
    <div>
      <label className="me-2" htmlFor="id">ID : </label>
      <input type="number" id='id' value={formInfo.id} onChange={e => setFormInfo({...formInfo, id:e.target.value})}/>
    </div>
    <button type='submit'>Search</button>
  </form>
  )
}

export default Form