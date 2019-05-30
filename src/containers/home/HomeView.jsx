import React, { Component } from "react";
import banner from "../../assets/banners/fn_background.jpg";
export class HomeView extends Component {
  render() {
    return (
      <section className="home-view">
        <div>
          <div className="home-banner-cntr">
            <img className="home-banner" src={banner} alt="banner" />
          </div>
        </div>
        <section className="home-controls-cntr">
            <div>

            </div>
            <div>
                <button>PLAY FREE NOW!</button>
            </div>
        </section>
      </section>
    );
  }
}

export default HomeView;
