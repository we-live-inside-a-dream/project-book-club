import "./App.css";
import { BasicComponent } from "./components/NewComponent";
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import Resources from "./pages/Resources";
import Schedule from "./pages/Schedule";
import Members from "./pages/Members";
import SignupForm from "./pages/SignupForm";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div>
      <div class="header">
        <Navbar />
        <h1 class="welcome">The Work Book Club</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/members" element={<Members />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/signupForm" element={<SignupForm />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
