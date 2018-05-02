import React from "react";

const buttonStyle = "btn btn-small waves-effect waves-light";

const UtilityBar = () => (
  <div className="card">
    <button className={buttonStyle}>show done</button>
    <button className={buttonStyle}>sort asc</button>
    <button className={buttonStyle}>sort desc</button>
    <button className={buttonStyle}>show all</button>
  </div>
);

export default UtilityBar;
