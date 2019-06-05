import React from "react";
import PropTypes from "prop-types";
export default function StoreItem(props) {
  return (
    <article className="store-item">
      <img src={props.item.images.information} />
    </article>
  );
}

StoreItem.propTypes = {
  item: PropTypes.object
};
