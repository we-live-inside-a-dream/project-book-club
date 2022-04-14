
import './App.css';
import {BasicComponent} from './components/NewComponent';
import Home from './pages/Home';
import { Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      
    </div>
  );
}

export default App;
