import React, {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [allPokemon, setAllPokemon] = useState([]);


  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1281&offset=0")
    .then(response => {
      return response.json();
  }).then(response => {
      setAllPokemon([...response.results])
  }).catch(err=>{
      console.log(err);
  });
  },[])

  return (
    <div className="App">
      <ul>
        {allPokemon.map(pokemon=> <li key={pokemon.name}>{pokemon.name}</li> )}
      </ul>
    </div>
  );
}

export default App;
