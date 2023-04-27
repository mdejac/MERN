import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Form from './components/Form';
import DisplayInfo from './components/DisplayInfo';
import DisplayPeople from './components/DisplayPeople';
import DisplayPlanets from './components/DisplayPlanets';
import DisplayError from './components/DisplayError';
import DisplayFilms from './components/DisplayFilms';
import DisplaySpecies from './components/DisplaySpecies';
import DisplayStarships from './components/DisplayStarships';
import DisplayVehicles from './components/DisplayVehicles';


function App() {
  return (
    <div className="App">
      <Form />
      <Routes>
        <Route path='/:searchType/:id' element={<DisplayInfo />} />
        {/* <Route path='/people/:id' element={<DisplayPeople />} />
        <Route path='/planets/:id' element={<DisplayPlanets />} />
        <Route path='/films/:id' element={<DisplayFilms />} />
        <Route path='/species/:id' element={<DisplaySpecies />} />
        <Route path='/starships/:id' element={<DisplayStarships />} />
        <Route path='/vehicles/:id' element={<DisplayVehicles />} />
        <Route path='/error' element={<DisplayError />} /> */}
      </Routes>
    </div>
  );
}

export default App;
