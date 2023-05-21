import React, {useState} from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Chat from './components/Chat';
import Header from './components/Header';
import Login from './components/Login';

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <Header/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Login name={name} setName={setName}/>} />
            <Route path='/chat' element={<Chat name={name}/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;