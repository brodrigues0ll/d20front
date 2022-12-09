import { Routes, Route } from 'react-router-dom';
import './app.css';


import Home from './pages/Home';

function App() {
  return (
    <div className='imgBG'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </div>

  );
}

export default App;
