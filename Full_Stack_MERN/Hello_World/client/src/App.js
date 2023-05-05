import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Detail from './components/Detail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path='/people' default />
        <Route element={<Detail/>} path='/people/:id' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
