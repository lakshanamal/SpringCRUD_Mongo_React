import React, { Component } from "react";
import Nav from "./Components/Nav";
import UserTable from "./Components/UserTable";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Nav />
        <div className="container mt-4">
          <UserTable />
        </div>
      </div>
    );
  }
}
