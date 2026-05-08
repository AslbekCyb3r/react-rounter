import './App.css';
import { Routes, Route } from 'react-router-dom';

import Users from './pages/users';
import Todos from './pages/Todos';
// import Product from './pages/phodoos';
import Header from './component/Header';
import Concat from './pages/concat';

function App() {
  return (
    <div className="App bg-sky-200 h-300">

      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/Todos' element={<Todos />} />
        <Route path='/concat' element={<Concat />} />

      </Routes>
    </div>
  );
}

export default App;