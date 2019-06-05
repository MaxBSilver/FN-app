import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCosmeticsThunk } from "../../api/cosmetics";
import CosmeticItemContainer from "../../components/cosmeticItemContainer/CosmeticItemContainer";
import Loading from "../../components/loading/Loading";
import PropTypes from "prop-types";
export class CosmeticsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all",
      displayItems: []
    };
  }
  async componentDidMount() {
    if (this.props.cosmeticItems.length === 0)
      await this.props.getAllCosmeticsThunk();
    this.setState({ displayItems: this.props.cosmeticItems });
  }

  selectDisplay = (filter) => {
    const { cosmeticItems } = this.props;
    const displayItems = cosmeticItems.filter(
      cosmetic => cosmetic.item.type === filter
    );
    this.setState({ displayItems, filter });
  };

  handleClick = e => {
    const { name } = e.target;
    this.selectDisplay(name);
  };

  render() {
    return (
      <section className="cosmetics-container">
        {!this.props.isLoading && (
          <React.Fragment>
            <h2>Cosmetics</h2>
            <div className="control-container">
              <button
                className="gliders-btn"
                name="glider"
                onClick={this.handleClick}
              >
                Gliders
              </button>
              <button
                className="pickaxes-btn"
                name="pickaxe"
                onClick={this.handleClick}
              >
                Pickaxes
              </button>
              <button
                className="outfits-btn"
                name="outfit"
                onClick={this.handleClick}
              >
                Outfits
              </button>
            </div>
            <section className="cosmetic-item-container">
              <CosmeticItemContainer displayItems={this.state.displayItems} />
            </section>
          </React.Fragment>
        )}
        {this.props.isLoading && <Loading />}
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
CosmeticsView.propTypes = {
  cosmeticItems: PropTypes.array,
  error: PropTypes.string,
  getAllCosmeticsThunk: PropTypes.func,
  isLoading: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CosmeticsView);
