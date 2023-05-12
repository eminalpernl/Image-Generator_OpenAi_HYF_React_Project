import { logo } from "./assets";
import { Link, Route, Routes } from "react-router-dom";
import { Home, CreatePost } from "./pages/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src={logo}
              alt="Logo"
              width="80"
              height="24"
              className="d-inline-block align-text-top"
            />
          </Link>
          <Link to="/create-post" className="navbar-brand">
            <button class="btn btn-primary" type="button">
              Create
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default App;
