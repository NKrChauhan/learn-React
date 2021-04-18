import logo from "./Components/pizzaLogo.png";
import "./App.css";
import Milestone from "./Components/Milestone";

function App() {
  var isClockwise = "1";
  return (
    <div className="App">
      <nav className="nav">
        <img src={logo} className="img" alt="img" height="30" />
      </nav>
      <header className="App-header">
        <Milestone number={isClockwise} />
      </header>
    </div>
  );
}

export default App;
