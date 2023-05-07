import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main'
import ProductDetail from './components/ProductDetail'
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="/products"/>
        <Route element={<ProductDetail/>} path="/products/:id" />
        <Route element={<UpdateProduct/>} path="/products/edit/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
