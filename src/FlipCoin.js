import React, { Component } from "react";
import Coin from "./Coin";
import "./FlipCoin.css";

class FlipCoin extends Component {
  static defaultProps = {
    coinSide: ["front", "back"],
  };
  state = {
    totalFlip: 0,
    head: 0,
    tail: 0,
    side: "front",
  };
  // generateRandomSide = () => (
  //   let idx = Math.floor(Math.random() * this.state.flipSide)
  //   return flipSide[idx]
  // )
  generateRandomSide = () => {
    let idx = Math.floor(Math.random() * this.props.coinSide.length);
    return this.props.coinSide[idx];
  };

  handleClick = () => {
    const randSide = this.generateRandomSide();

    // this.setState((currState) => ({
    //   side: randSide,
    //   totalFlip: currState.totalFlip + 1,
    // }));
    this.setState((curSt) => {
      let newState = {
        ...curSt,
        side: randSide,
        totalFlip: curSt.totalFlip + 1,
      };
      if (randSide === "front") {
        newState.head += 1;
      } else {
        newState.tail += 1;
      }
      return newState;
    });
  };

  render() {
    return (
      <div className="FlipCoin">
        <h1>Let's Flip a Coin!!</h1>
        <Coin side={this.state.side} />
        <button onClick={this.handleClick}>Flip!!</button>
        <p>
          Out of {this.state.totalFlip} Flips,there have been {this.state.head}{" "}
          heads and {this.state.tail} tails
        </p>
      </div>
    );
  }
}

export default FlipCoin;
