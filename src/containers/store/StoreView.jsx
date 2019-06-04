import React, { Component } from "react";
import { getCurrentStoreItemsThunk } from "../../api/store";
import moment from "moment";
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

    return (
      <div className="store-container">
        <div>
          <h2>
            Store<span>{moment().format("MMM Do YY")  }</span>
          </h2>
          <p>
            The current item shop rotation for Fortnite Battle Royale - updates
            daily at <span>00:00 UTC</span> .
          </p>
        </div>
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreView);
