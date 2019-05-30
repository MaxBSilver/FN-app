import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomeView from "../home/HomeView";
import Nav from '../../components/nav/Nav';
export class App extends Component {
  async componentDidMount() {}

  render() {
    return (
      <div>
        <Nav></Nav>
        <Route path="/" component={HomeView} />
      </div>
    );
  }
}

export default App;
