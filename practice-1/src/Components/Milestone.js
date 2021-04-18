import React from "react";
import "./Milestone.css";
import logo from "./pizzaLogo.png";

class Milestone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      animation: "normal",
      isClockwise: true,
    };
  }

  addCount() {
    this.setState({
      number: this.state.number + 1,
    });
    console.log(this.state.number);
  }

  subCount() {
    this.setState({
      number: this.state.number - 1,
    });
  }

  alterRotation() {
    var animate = "";
    if (this.state.isClockwise) {
      animate = "reverse";
    } else {
      animate = "normal";
    }
    this.setState({
      isClockwise: !this.state.isClockwise,
      animation: animate,
    });
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <img
          src={logo}
          className="rotate-logo"
          style={{ animationDirection: this.state.animation }}
          alt="logo"
        />
        <br />
        <br />
        <br />
        <button className="btn" onClick={() => this.alterRotation()}>
          Flip the rotation of box
        </button>
        <br />
        <br />
        <br />
        <h3 className="text">{this.state.number}</h3>
        <table>
          <tr>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => this.addCount()}
              >
                + Counter
              </button>
            </td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => this.subCount()}
              >
                - Counter
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Milestone;
