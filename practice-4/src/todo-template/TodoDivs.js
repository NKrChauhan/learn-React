import React from "react";
import "./Todo.css";
import { Context } from "../GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

class TodoDivs extends React.Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      change: true,
    };
  }
  deleteNote = (index) => {
    this.context.removeTodoList(index);
    this.setState({
      change: !this.state.change,
    });
  };
  render() {
    return this.context.todoList.map((x, index) => (
      <div key={index} className="content">
        <li>
          <button
            className="btn btn-outline-light"
            title="Delete it!"
            style={{
              borderRadius: "50%",
              float: "left",
            }}
            onClick={this.deleteNote.bind(this, index)}
          >
            <FontAwesomeIcon icon={faFire} />
          </button>
          <h2>{x.title}</h2>
          <p>{x.desc}</p>
        </li>
      </div>
    ));
  }
}
export default TodoDivs;
