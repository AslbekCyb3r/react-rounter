import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/abount';
import Product from './pages/produsk';
import Header from './component/Header';

function App() {
  return (
    <div className="App bg-sky-200 h-screen">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;