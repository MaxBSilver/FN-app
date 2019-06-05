import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Splash from "../../components/splash/Splash";
import Nav from "../../components/nav/Nav";
import StoreView from "../store/StoreView";
import CosmeticsView from "../cosmetics/CosmeticsView";
import HomeView from "../home/HomeView";
import Error from "../../components/error/Error";
import RequestError from "../../components/requestError/RequestError";
import { connect } from "react-redux";
export class App extends Component {
  async componentDidMount() {}
  render() {
    const { error } = this.props;
    return (
      <div id="app">
        <Nav />
        <Route
          exact
          path="/"
          render={() =>
            error !== "" ? <Redirect to="/fn/error" /> : <Splash />
          }
        />
        <Route
          path="/fn/home"
          render={() =>
            error !== "" ? <Redirect to="/fn/error" /> : <HomeView />
          }
        />
        <Route
          exact
          path="/fn/store"
          render={() =>
            error !== "" ? <Redirect to="/fn/error" /> : <StoreView />
          }
        />
        <Route
          exact
          path="/fn/cosmetics"
          render={() =>
            error !== "" ? <Redirect to="/fn/error" /> : <CosmeticsView />
          }
        />
        <Route path="/fn/error" component={RequestError} />
        <Route path="*" exact={true} component={Error} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  error: state.error
});

export default connect(mapStateToProps)(App);
