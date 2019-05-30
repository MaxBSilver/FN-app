import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomeView from "../home/HomeView";
import Nav from "../../components/nav/Nav";
import NewsView from "../news/NewsView";
import StoreView from "../store/StoreView";
import CosmeticsView from "../cosmetics/CosmeticsView";
export class App extends Component {
  async componentDidMount() {}

  render() {
    return (
      <div>
        <Nav />
        <Route path="/" component={HomeView} />
        <Route path="/fn/news" component={NewsView} />
        <Route path="/fn/store" component={StoreView} />
        <Route path="/fn/cosmetics" component={CosmeticsView} />
      </div>
    );
  }
}

export default App;
