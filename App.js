import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Contact from "./Contact";
import About from "./About";
import Students from "./Students";

function App() {
  return (
    <Router>
      <nav style={{ padding: "15px", background: "#333" }}>
        <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
        <Link to="/register" style={{ margin: "10px", color: "white" }}>Register</Link>
        <Link to="/login" style={{ margin: "10px", color: "white" }}>Login</Link>
        <Link to="/students" style={{ margin: "10px", color: "white" }}>Students</Link>
        <Link to="/contact" style={{ margin: "10px", color: "white" }}>Contact</Link>
        <Link to="/about" style={{ margin: "10px", color: "white" }}>About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/students" element={<Students />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;