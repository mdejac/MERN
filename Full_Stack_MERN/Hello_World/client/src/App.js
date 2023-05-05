import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Detail from './components/Detail'
import Update from './components/Update'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path='/people' default />
        <Route element={<Detail/>} path='/people/:id' />
        <Route element={<Update/>} path='people/edit/:id' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
