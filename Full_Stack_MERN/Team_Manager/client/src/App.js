import {BrowserRouter, Routes, Route} from 'react-router-dom';
import IndexView from './views/IndexView';
import CreateView from './views/CreateView';
import EditView from './views/EditView';
import DetailView from './views/DetailView';

import './App.css';
import GameView from './views/GameView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/players' element={<IndexView/>}/>
          <Route path='/players/create' element={<CreateView/>}/>
          <Route path='/players/:id' element={<DetailView/>}/>
          <Route path='/players/:id/edit' element={<EditView/>} />
          <Route path='/status/game/:gameNumber' element={<GameView/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
