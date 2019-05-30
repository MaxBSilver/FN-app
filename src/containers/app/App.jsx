import React, { Component } from "react";
import {getChallenges} from '../../api/challenges';
export class App extends Component {
  async componentDidMount() {
    const test1 = await getChallenges();
    console.log(test1)
  }

  render() {
    return <div />;
  }
}

export default App;
