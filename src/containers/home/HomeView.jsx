import React, { Component } from "react";
import { getBrNewsThunk } from "../../api/news";
import { connect } from "react-redux";
import Loading from "../../components/loading/Loading";
import HomeItem from "../../components/homeItem/HomeItem";
export class HomeView extends Component {
  async componentDidMount() {
    await this.props.getBrNewsThunk();
  }
  //   title(pin): "Influence and Intrigue"
  // body(pin): "The new Takara Set is available in the Item Shop!"
  // image(pin): "https://fortnite-public-files.theapinetwork.com/6a965e58916d399caaca1d08ce2324d5.jpeg"
  // time(pin): 1559261148
  // mainColor(pin): "#990e2d"
  // adSpace(pin): "NEW!"
  render() {
    const homeItems = this.props.news.map(newsItem => (
      <HomeItem key={newsItem.title} {...newsItem} />
    ));

    return this.props.isLoading ? (
      <section className="home-view-cntr">
        <Loading />
      </section>
    ) : (
      <section className="home-view-cntr">{homeItems}</section>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news,
  isLoading: state.isLoading,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  getBrNewsThunk: () => dispatch(getBrNewsThunk())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView);
