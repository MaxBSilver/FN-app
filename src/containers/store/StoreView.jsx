import React, { Component } from "react";
import { getCurrentStoreItemsThunk } from "../../api/store";
import moment from "moment";
import { connect } from "react-redux";
import StoreItem from "../../components/storeItem/StoreItem";
import Loading from "../../components/loading/Loading";
import PropTypes from "prop-types";
export class StoreView extends Component {
  async componentDidMount() {
    if (this.props.storeItems.length === 0)
      await this.props.getCurrentStoreItemsThunk();
  }
  render() {
    const storeItems = this.props.storeItems.map(storeItem => (
      <StoreItem key={storeItem.itemId} {...storeItem} />
    ));
    return this.props.isLoading ? (
      <div className="store-container">
        <Loading />
      </div>
    ) : (
      <div className="store-container">
        <section className="store-info-container">
          <h2>
            Store<span>{moment().format("MMM Do YY")}</span>
          </h2>
          <p>
            The current item shop rotation for Fortnite Battle Royale - updates
            daily at <span>00:00 UTC</span> .
          </p>
        </section>
        <section className="store-item-container">{storeItems}</section>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  storeItems: state.storeItems,
  isLoading: state.isLoading,
  error: state.error
});

export const mapDispatchToProps = dispatch => ({
  getCurrentStoreItemsThunk: () => dispatch(getCurrentStoreItemsThunk())
});

 StoreView.propTypes = {
  storeItems: PropTypes.array,
  getCurrentStoreItemsThunk: PropTypes.func,
  isLoading: PropTypes.bool
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreView);
