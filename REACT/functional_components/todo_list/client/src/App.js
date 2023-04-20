import React, {useState, useEffect} from 'react'
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import DisplayTasks from './components/DisplayTasks';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [uniqueID, setUniqueID] = useState(0);

  const addToList = task => {
    let newTask = {
      text : task,
      completed : false,
      id : uniqueID
    }
    setTodoList([...todoList, newTask])
    setUniqueID(uniqueID + 1);
  }
  
  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem('todoList'));
    if (storedTodoList.length > 0) {
      setTodoList(storedTodoList);
      setUniqueID(JSON.parse(localStorage.getItem('uniqueID')))
    }
  },[])
  
  useEffect(() => {
      localStorage.setItem('todoList', JSON.stringify(todoList));
      localStorage.setItem('uniqueID', JSON.stringify(uniqueID));
  }, [todoList, uniqueID]);

  return (
    <div className="container">
        <AddTaskForm addToList={addToList}/>
        <DisplayTasks todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
