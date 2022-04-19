
import './App.css';
import {BasicComponent} from './components/NewComponent';
import Home from './pages/Home';
import { Routes, Route, Link } from "react-router-dom";
import Resources from './pages/Resources';
import Schedule from './pages/Schedule';
import Members from './pages/Members';
import SignupForm from './components/SignupForm';



function App() {
  return (

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/resources" element={<Resources />}/>
        <Route path="/members" element={<Members />}/>
        <Route path="/schedule" element={<Schedule />}/>
        <Route path="/signupForm" element={<SignupForm />}/>

      </Routes>

  );
}

export default App;
