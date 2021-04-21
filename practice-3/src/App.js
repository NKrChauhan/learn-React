import "./App.css";
import ApiSearch from "./ApiSearch/ApiSearch";

function App() {
  var list = [];
  for (var i = 0; i < 20; i++) {
    list.push(<li key={i}></li>);
  }
  return (
    <div className="App" id="container">
      <nav
        style={{
          height: "14px",
          color: "black",
          backgroundColor: "wheat",
          fontSize: "10px",
        }}
      >
        Animaze
      </nav>
      <ul className="fireflies">{list}</ul>
      <div className="App-header">
        <div className="border" style={{ marginTop: "-300px" }}></div>
        <ApiSearch />
        <div className="border"></div>
      </div>
    </div>
  );
}

export default App;
