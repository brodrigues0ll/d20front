import { Routes, Route } from 'react-router-dom';
import './app.css';


import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Confirmacao from './components/Confirmacao';

function App() {
  return (
    <div className='imgBG'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirmacao" element={<Confirmacao />} />
      </Routes>

    </div>

  );
}

export default App;
