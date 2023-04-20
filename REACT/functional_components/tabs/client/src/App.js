import React, { useState } from 'react';
import './App.css';
import Tab from './components/Tab';
import TabDisplay from './components/TabDisplay';

function App() {
  const messages = [
    {label:"Tab 1",
     content:"Tab 1 content"
    },
    {label:"Tab 2",
     content:"Tab 2 content"
    },
    {label:"Tab 3",
     content:"Tab 3 content"
    }
  ]

  const [allMessages] = useState(messages);
  const [displayMessage, setDisplayMessage] = useState("");

  return (
    <div className="App">
      <Tab allMessages={allMessages} setDisplayMessage={setDisplayMessage} />
      <TabDisplay displayMessage={displayMessage}/>
    </div>
  );
}

export default App;
