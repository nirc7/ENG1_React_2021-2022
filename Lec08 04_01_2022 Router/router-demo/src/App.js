import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import User from "./Pages/User";

function App() {
  return (
    <div className="App">
      <div style={{ fontSize: 35, margin: 20 }}>
        <Link to="/"> Home </Link> | <Link to="/about"> About </Link> |
        <Link to={"/user/" + Math.floor(Math.random() * 10)}> User </Link>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:userId" element={<User />} />
        </Routes>

        {/* nir
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>  */}
      </header>
    </div>
  );
}

export default App;
