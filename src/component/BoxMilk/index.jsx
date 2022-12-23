import React from "react";
import "./styles.css";

export default function BoxMilk(props) {
  return (
    <div className="milk">
      <div className="milkImg">
        <img alt="" src={props.img} />
      </div>
      <div className="milkContent">
        <div className="milkHeader">{props.title}</div>
        <div className="milkParagraph">{props.content}</div>
        <div className="milkPrice">{props.price}</div>
        <button className="button">MUA NGAY</button>
      </div>
    </div>
  );
}
