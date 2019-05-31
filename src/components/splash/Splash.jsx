import React, { Component } from "react";
import banner from "../../assets/banners/fn_background.jpg";

export class Splash extends Component {
  render() {
    return (
      <section className="splash-view">
        <div>
          <div className="splash-banner-cntr">
            <img className="splash-banner" src={banner} alt="banner" />
          </div>
        </div>
        <section className="splash-controls-cntr">
          <div className="splash-info-cntr">
            <button className="splash-info" onClick={() => { this.props.history.push('/fn/home') }}>
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
