import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCosmeticsThunk } from "../../api/cosmetics";

export class CosmeticsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "All",
      allCosmetics: [],
      gliders: [],
      outfits: [],
      pickaxes: []
    };
  }
  selectDisplay = () => {

  };

  handleClick = () => {};
  async componentDidMount() {
    if (this.props.cosmeticItems === 0) await this.props.getAllCosmeticsThunk();
  }

  render() {
    return (
      <section className="cosmetics-container">
        <div className="control-container">
          <button onClick={this.handleClick}>Gliders</button>
          <button onClick={this.handleClick}>Pickaxes</button>
          <button onClick={this.handleClick}>Outfits</button>
        </div>
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  cosmeticItems: state.cosmeticItems,
  isLoading: state.isLoading,
  error: state.error
});

export const mapDispatchToProps = dispatch => ({
  getAllCosmeticsThunk: () => dispatch(getAllCosmeticsThunk())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CosmeticsView);
