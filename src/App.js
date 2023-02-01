import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home'
import Contact from './Component/Contact';


function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>   
    </div>
  );
}

export default App;
