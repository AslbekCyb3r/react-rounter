import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/abount';
import Product from './pages/produsk';
import Header from './component/Header';
import Concat from './pages/concat';

function App() {
  return (
    <div className="App bg-sky-200 h-300">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/concat' element={<Concat />} />

      </Routes>
    </div>
  );
}

export default App;