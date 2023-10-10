import React, { Component } from 'react';
import "../../styles/Layout/Home.scss";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className={"main"}>
        <h1>Hello, world!</h1>
        <h2>I love Kurisu Makise</h2>
      </div>
    );
  }
}
