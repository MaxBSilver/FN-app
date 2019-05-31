import React, { Component } from "react";
import { getBrNewsThunk } from "../../api/news";
import { connect } from "react-redux";
import Loading from "../../components/loading/Loading";

export class HomeView extends Component {
  async componentDidMount() {
    await this.props.getBrNewsThunk();
  }

  render() {
    return this.props.isLoading ? <Loading /> : <div />;
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
