import React, { Component } from "react";
import Nav from "./Components/Nav";
import SideBar from "./Components/SideBar/SideBar";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <SideBar />
      </div>
    );
  }
}
