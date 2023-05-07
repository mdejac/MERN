import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DisplayAuthors from './components/DisplayAuthors';
import AddAuthor from './components/AddAuthor';
import UpdateAuthor from './components/UpdateAuthor';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <h1 className='App'>Favorite Authors</h1>
      <Routes>
        <Route path='/authors' element={<DisplayAuthors/>}/>
        <Route path='/authors/new' element={<AddAuthor/>} />
        <Route path='/authors/edit/:id' element={<UpdateAuthor/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
