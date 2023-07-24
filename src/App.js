import logo from './logo.svg';
import './App.scss';
import Home from './views/Home';
import { Route, Routes } from 'react-router-dom';
import Menu from './views/Menu';
import About from './views/About';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/about' element={<About />} />
    </Routes>

  );
}

export default App;
