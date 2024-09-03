import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import "./fontAwesome"; // Import the fontAwesome configuration
import Header from "./components/navigations/header/Header";
import MainNav from "./components/navigations/main nav/MainNav";
import Sport from "./components/pages/home/Sport";
import Game from "./components/pages/home/Game";

function App() {
  return (
    <div className="App">
      <Header />
      <MainNav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sport/:sportName?" element={<Sport />} />
          <Route path="/sport/:sportName/:id" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
