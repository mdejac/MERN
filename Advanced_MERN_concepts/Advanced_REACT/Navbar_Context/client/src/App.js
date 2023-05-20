import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MyContext from './context/MyContext';
import Wrapper from './views/Wrapper';
import Form from './components/Form';

function App() {

  const [name, setName] = useState("");
  return (
    <div className="App">
      <MyContext.Provider value={{name, setName}}>
        <Wrapper>
          <Navbar/>
          <Form/>
        </Wrapper>
      </MyContext.Provider>  
    </div>
  );
}

export default App;
