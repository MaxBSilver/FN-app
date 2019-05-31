import React from "react";
import moment from "moment";
export default function HomeItem(props) {
  const imageStyle = {
    background: `url(${props.image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
  };
  const hasAdd = () => {
    console.log(props);
    return props.meta.adSpace ? true : false;
  };

  return (
    <div className="home-item-cntr">
      <section className="title-container">
        <div>
          <h4 className="title-name">{props.title}</h4>
          <h4 className="title-date">
            {moment(props.time * 1000).format("MM/DD/YYYY")}
          </h4>
        </div>
        {hasAdd() ? (
          <span>{props.meta.adSpace}</span>
        ) : (
          <span style={{ background: "transparent" }} />
        )}
      </section>
      <article className="home-item" style={imageStyle}>
        <section className="card-hover-cntr">
          <div className="card-hover-background">
            <p>{props.body}</p>
          </div>
        </section>
      </article>
    </div>
  );
}
