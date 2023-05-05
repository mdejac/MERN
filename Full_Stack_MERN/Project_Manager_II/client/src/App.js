import './App.css';
import ProductForm from './components/ProductForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main'
import ProductDetail from './components/ProductDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="/products" />
        <Route element={<ProductDetail/>} path="/products/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
