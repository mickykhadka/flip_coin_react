import React, { Component } from "react";
import front from "./f.png";
import back from "./b.png";
import "./Coin.css";

class Coin extends Component {
  render() {
    console.log(this.props.side);
    return (
      <div className="Coin">
        {this.props.side === "front" ? (
          <img src={front} alt="head" />
        ) : (
          <img src={back} alt="tail" />
        )}
      </div>
    );
  }
}

export default Coin;
