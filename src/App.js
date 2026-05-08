import './App.css';
import { Routes, Route } from 'react-router-dom';

import Users from './pages/users';
import Todos from './pages/Todos';
// import Product from './pages/phodoos';
import Header from './component/Header';
import Concat from './pages/Post';
import Phodoos from './pages/phodoos';
import Post from './pages/Post';
import Albums from './pages/Albums';
import Coments from './pages/Coments';

function App() {
  return (
    <div className="App bg-sky-200 h-300">

      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/Todos' element={<Todos />} />
        <Route path='/Phodoos' element={<Phodoos />} />
        <Route path='/post' element={<Post />} />
        <Route path='/albums' element={<Albums />} />
        <Route path='/coments' element={<Coments />} />



      </Routes>
    </div>
  );
}

export default App;