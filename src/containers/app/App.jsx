import React, { Component } from "react";
import { Route } from "react-router-dom";
import Splash from "../../components/splash/Splash";
import Nav from "../../components/nav/Nav";
import StoreView from "../store/StoreView";
import CosmeticsView from "../cosmetics/CosmeticsView";
import HomeView from "../home/HomeView";
import Error from "../../components/error/Error";
export class App extends Component {
  async componentDidMount() {}

  render() {
    return (
      <div id="app">
        <Nav />
        <Route exact path="/" component={Splash} />
        <Route path="/fn/home" component={HomeView} />
        <Route path="/fn/store" component={StoreView} />
        <Route path="/fn/cosmetics" component={CosmeticsView} />
        <Route path="*" exact={true} component={Error} />
      </div>
    );
  }
}

export default App;
