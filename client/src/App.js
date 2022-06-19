import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../src/components/Company/Home";
import Landing from "./components/Home/Landing";
import Login from "./components/Home/Login";
import Register from "./components/Home/Register";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/chome" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
