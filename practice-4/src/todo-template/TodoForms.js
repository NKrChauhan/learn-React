import React from "react";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Context } from "../GlobalContext";

class TodoForms extends React.Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
    };
  }
  handelSubmit = (e) => {
    e.preventDefault();
    this.context.addTodoList(this.state.title, this.state.desc);
    this.setState({
      title: "",
      desc: "",
    });
  };
  render() {
    return (
      <li>
        <form
          style={{ left: "0%", float: "left" }}
          onSubmit={this.handelSubmit}
        >
          <input
            type="text"
            className="form-control"
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
            placeholder="Title"
            required
          />
          <br />
          <input
            type="text"
            className="form-control"
            value={this.state.desc}
            onChange={(e) => this.setState({ desc: e.target.value })}
            placeholder="Content"
            required
          />
          <br />
          <button className="btn btn-outline-light" type="submit">
            <FontAwesomeIcon icon={faLeaf} />
            Add
          </button>
        </form>
      </li>
    );
  }
}
export default TodoForms;
