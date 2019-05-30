import React, { Component } from "react";
import { getCurrentStore } from "../../api/store";
export class App extends Component {
  async componentDidMount() {
    const test = await getCurrentStore();
    console.log(test);
  }

  render() {
    return <div />;
  }
}

export default App;
