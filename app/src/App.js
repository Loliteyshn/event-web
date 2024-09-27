import logo from './logo.svg';
import './App.css';
import Events from './components/Events/Events';
import Registration from './components/Registration/Registration';
import View from './components/View/View';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Events />} />
      <Route path="/registration/:eventid?" element={<Registration />} />
      <Route path="/view/:eventid?" element={<View />} />
    </Routes>
  );
}

export default App;
