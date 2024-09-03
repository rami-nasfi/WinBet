import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import "./fontAwesome"; // Import the fontAwesome configuration
import Header from "./components/navigations/header/Header";
import MainNav from "./components/navigations/main nav/MainNav";
import Section from "./components/pages/home/Section";

function App() {
  return (
    <div className="App">
      <Header />
      <MainNav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/section/:sportName" element={<Section />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
