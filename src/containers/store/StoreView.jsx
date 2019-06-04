import React, { Component } from "react";
import { getCurrentStoreItemsThunk } from "../../api/store";

import { connect } from "react-redux";
import StoreItem from "../../components/storeItem/StoreItem";
export class StoreView extends Component {
  async componentDidMount() {
    await this.props.getCurrentStoreItemsThunk();
  }
  render() {
    const storeItems = this.props.storeItems.map(storeItem => (
      <StoreItem key={storeItem.itemId} {...storeItem} />
    ));

    return <div>{storeItems}</div>;
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreView);
