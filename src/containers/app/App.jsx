import React, { Component } from "react";
import { getCurrentStoreItems, getUpcomingStoreItems, getAllStoreItems } from "../../api/store";
export class App extends Component {
  async componentDidMount() {
    const test = await getCurrentStoreItems();
    const test1 = await getUpcomingStoreItems();
    const test2 = await getAllStoreItems();

    console.log(test);
    console.log(test1)
    console.log(test2)
  }

  render() {
    return <div />;
  }
}

export default App;
