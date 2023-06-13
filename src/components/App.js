
import '../css/App.css'

import Home from './pages/Home';
import About from './pages/About';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className=""  >
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        {/* <Route path='' element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
