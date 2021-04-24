import "./App.css";
import ApiSearchCB from "./ApiSearch/APISearch_CB";

function App() {
  var list = [];
  for (var i = 0; i < 10; i++) {
    list.push(<li key={i}></li>);
  }
  return (
    <div className="App" id="container">
      <nav
        style={{
          height: "20px",
          color: "black",
          backgroundColor: "wheat",
          fontSize: "10px",
        }}
      >
        Animaze
      </nav>
      <ul className="fireflies">{list}</ul>
      <div className="App-header">
        <ApiSearchCB />
      </div>
    </div>
  );
}

export default App;
