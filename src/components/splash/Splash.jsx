import React, { Component } from "react";
import banner from "../../assets/banners/fn_background.jpg";

export class Splash extends Component {
  render() {
    return (
      <section className="home-view">
        <div>
          <div className="home-banner-cntr">
            <img className="home-banner" src={banner} alt="banner" />
          </div>
        </div>
        <section className="home-controls-cntr">
          <div className="home-info-cntr">
            <button className="home-info" onClick={() => { this.props.history.push('/home') }}>
              <h3>CONTINUE TO <span>FORTNITEFEED</span></h3>
            </button>
          </div>
          <div>
            <button className="play-now-btn">PLAY FREE NOW</button>
            <button className="checkout-the-api-btn">CHECKOUT THE API</button>
          </div>
        </section>
      </section>
    );
  }
}

export default Splash;
