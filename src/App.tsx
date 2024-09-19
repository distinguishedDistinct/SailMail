import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Count } from "./components/Count";
import { Tasks } from "./components/Tasks";
import About from "./components/About";
import { Calculator } from "./components/Calculator";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar title={"MailSail"} />
      <Routes>
        <Route path="/" element={<NavigateToHome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tasks" element={<Tasks title="To Do List" />} />
        <Route path="/counter" element={<Count />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
      <Footer />
    </Router>
  );
}

// Component to handle conditional rendering of Home
function NavigateToHome() {
  const location = useLocation();
  const currentPath = location.pathname;

  return currentPath !== "/home" ? <Home /> : null;
}

export default App;
