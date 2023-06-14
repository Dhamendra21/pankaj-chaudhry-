
import '../css/App.css'

import Home from './pages/Home';
import About from './pages/About';
import { Route,Routes } from 'react-router-dom';
import Project from './pages/Project';

function App() {
  return (
    <div className=""  >
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Project' element={<Project/>} />
      </Routes>
    </div>
  );
}

export default App;
