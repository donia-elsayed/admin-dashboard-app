import "./App.css";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/users" element={<Dashboard />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/signUp" element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default App;
