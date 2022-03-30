import React from "react";
import "./styleItem.css";


const Item = ({title, desc, backImg, FirstButton, SecondButton, twoButtons}) => {
  return (
    <div
      className="item"
      style={{
        backgroundImage: `url(${backImg})`,
      }}
    >
      <div className="item-container">
        <div className="item-text">
          <p>{title}</p>
        </div>
          <div className="item-desc">
            <p>{desc}</p>
          </div>
        <div className="item-third">
            <button className="firstB">{FirstButton}</button>
            {twoButtons && (
              <button className="secondB">{SecondButton}</button>
            )}
        </div>
      </div>
    </div>
  );
};

export default Item;
