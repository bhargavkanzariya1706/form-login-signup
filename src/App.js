import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            Login
          </Route>
          <Route path="/signup" element={<Signup />}>
            Signup
          </Route>
          <Route path="/profile" element={<Profile />}>
            Profile
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
