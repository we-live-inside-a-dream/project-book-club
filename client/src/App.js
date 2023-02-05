import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Resources from "./pages/Resources";
import Schedule from "./pages/Schedule";
import Members from "./pages/Members";
import SignupForm from "./pages/SignupForm";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
// import MustBeLoggedIn from "./components/MustBeLoggedIn";
import PrivatePage from "./components/PrivatePage";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <div class="header">
          <Navbar />
          <h1 class="welcome">The Work Book Club</h1>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route
            path="/members"
            element={
              <PrivatePage>
                <Members />
              </PrivatePage>
            }
          />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/signupForm" element={<SignupForm />} />{" "}
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
