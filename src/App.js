import './App.scss';
import Home from './views/Home';
import { Route, Routes } from 'react-router-dom';
import Menu from './views/Menu';
import About from './views/About';
import Factory from './views/Factory';
import Contacts from './views/Contacts';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/about' element={<About />} />
      <Route path='/factory' element={<Factory />} />
      <Route path='/contacts' element={<Contacts />} />
    </Routes>
  );
}

export default App;
