import "./App.css";
import Login from "./Component/Login";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              Practice-2
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </nav>
      <Login />
    </div>
  );
}

export default App;
