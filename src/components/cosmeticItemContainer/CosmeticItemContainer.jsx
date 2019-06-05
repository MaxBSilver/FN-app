import React from "react";
import PropTypes from 'prop-types';
export default function CosmeticItemContainer(props) {
  const cosmetics = props.displayItems.splice(0, 50);
  const cosmeticCards = cosmetics.map(card => {
    return (
      <article className="cosmetic-card" key={card.itemId}>
        <img alt={card.item.name} src={card.item.images.information} />
      </article>
    );
  });

  return <div>{cosmeticCards}</div>;
}

CosmeticItemContainer.propTypes = {
    displayItems : PropTypes.array
}