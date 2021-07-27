import React, { Component } from "react";
import Nav from "./Components/Nav";
import UserTable from "./Components/UserTable";
import Add from "./Components/Add";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Nav />
        <Add />
        <div className="container mt-4">
          <UserTable />
        </div>
      </div>
    );
  }
}
