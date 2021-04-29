import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import TodoForms from "./todo-template/TodoForms";
import TodoDivs from "./todo-template/TodoDivs";
import GlobalContextProvider from "./GlobalContext.js";

function App() {
  window.onbeforeunload = (event) => {
    const e = event || window.event;
    e.preventDefault();
    if (e) {
      e.returnValue = ""; // Legacy method for cross browser support
    }
    return ""; // Legacy method for cross browser support
  };
  return (
    <div className="App App-header">
      <GlobalContextProvider>
        <Navbar />
        <ul className="todo">
          <TodoForms />
          <TodoDivs title="Title 1" desc="MY RULZ" />
        </ul>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
