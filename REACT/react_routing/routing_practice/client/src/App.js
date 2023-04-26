import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import InputDisplay from './components/InputDisplay';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/:input" element={<InputDisplay/>} />
        <Route path="/:input/:textColor/:bgColor" element={<InputDisplay/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
