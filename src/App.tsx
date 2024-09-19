import Navbar from "./components/Navbar";
import { Count } from "./components/Count";
import { Tasks } from "./components/Tasks";
import About from "./components/About";
import { Calculator } from "./components/Calculator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  // useEffect(() => {
  //   alert("Welcome User");
  // }, []);
  return (
    <>
      <Router>
        <Navbar title={"MailSail"} />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/tasks" element={<Tasks title="To Do List" />} />
          <Route path="/counter" element={<Count />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
