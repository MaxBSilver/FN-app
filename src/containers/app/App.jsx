import React, { Component } from "react";
import { Route } from "react-router-dom";
import Splash from "../../components/splash/Splash";
import Nav from "../../components/nav/Nav";
import NewsView from "../news/NewsView";
import StoreView from "../store/StoreView";
import CosmeticsView from "../cosmetics/CosmeticsView";
import HomeView from "../home/HomeView";
export class App extends Component {
  async componentDidMount() {}

  render() {
    return (
      <div id="app">
        <Nav />
        <Route exact path="/" component={Splash} />
        <Route path="/home" component={HomeView} />
        <Route path="/fn/news" component={NewsView} />
        <Route path="/fn/store" component={StoreView} />
        <Route path="/fn/cosmetics" component={CosmeticsView} />
      </div>
    );
  }
}

export default App;
