import './App.css';
import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import Form from './components/Form';
import DisplayInfo from './components/DisplayInfo';


function App() {
  const [searchInfo, setSearchInfo] = useState({searchType:"people", id:0, submitted:false})
  return (
    <div className="App">
      <Form searchInfo={searchInfo} setSearchInfo={setSearchInfo}/>
      <Routes>
        <Route path='/:searchType/:id' element={<DisplayInfo searchInfo={searchInfo}/>} />
      </Routes>
    </div>
  );
}

export default App;
