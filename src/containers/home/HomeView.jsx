import React, { Component } from "react";
import { getBrNews } from "../../api/news";

export class HomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: []
    };
  }

  async componentDidMount() {
    const response = await getBrNews();
    const news = response.data.data;
    this.setState({ news });
  }

  render() {
    const { news } = this.state;
    return <div></div>;
  }
}

export default HomeView;
