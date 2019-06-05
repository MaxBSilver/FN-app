import React from "react";

export default function StoreItem(props) {
  console.log(props);
  return (
    <article className="store-item">
      <img src={props.item.images.information} />
    </article>
  );
}
