import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import Footer from "./Footer";
import "../../styles/Layout/Layout.scss";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className={"layout"}>
        <NavMenu />
        <Container tag="main">
          {this.props.children}
        </Container>
        <Footer/>
      </div>
    );
  }
}
