import React, { Component } from "react";
import { getBrNewsThunk } from "../../api/news";
import { connect } from "react-redux";
import Loading from "../../components/loading/Loading";
import HomeItem from "../../components/homeItem/HomeItem";
import YouTube from "react-youtube";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
export class HomeView extends Component {
  async componentDidMount() {
    if (this.props.news.length === 0) await this.props.getBrNewsThunk();
  }
  loopVideo(event) {
    event.target.playVideo();
  }
  render() {
    console.log(this.props);

    const opts = {
      width: "800",
      height: "450",
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        fs: 0,
        loop: 1,
        playlist: "n4YkqKCp2DQ",
        modestbranding: 1,
        mute: 1,
        color: "rgb(0, 173, 241)",
        wrapper: "transparent"
      }
    };
    const homeItems = this.props.news.map(newsItem => (
      <HomeItem key={newsItem.title} {...newsItem} />
    ));

    return this.props.isLoading ? (
      <section className="home-view-cntr">
        <Loading />
      </section>
    ) : (
      <section className="home-view-cntr">
        <div className="home-top">
          <section className="home-video-cntr">
            <div className="video-mask" />
            <YouTube
              videoId="n4YkqKCp2DQ"
              opts={opts}
              style={{ backgroundColor: "white" }}
            />
          </section>
          <section className="home-controls-cntr">
            <NavLink to="/fn/cosmetics" className="cosmetics-btn">
              View all items!
            </NavLink>
            <NavLink to="/fn/store" className="store-btn">
              Checkout the Store!
            </NavLink>
            <NavLink className="search-users-btn" to="/fn/users">
              Search Users!
            </NavLink>
          </section>
        </div>
        <div className="home-bottom">
          <section className="home-news-cntr">
            <h3>Recent News</h3>
            <div className="home-item-scroll-cntr">{homeItems}</div>
          </section>
        </div>
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  news: state.news,
  isLoading: state.isLoading,
  error: state.error
});

export const mapDispatchToProps = dispatch => ({
  getBrNewsThunk: () => dispatch(getBrNewsThunk())
});
HomeView.propTypes = {
  error: PropTypes.string,
  getBrNewsThunk: PropTypes.func,
  isLoading: PropTypes.bool,
  news: PropTypes.arrayOf(PropTypes.object)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView);
