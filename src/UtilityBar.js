import React from "react";
import { Link, withRouter } from "react-router-dom";

const buttonStyle = "btn btn-small waves-effect waves-light";

const UtilityBar = props => {
  const path = props.location.pathname.substr(1);

  return (
    <div className="">
      <Link to={path === "showDone" ? "/" : "/showDone"}>
        <button className={buttonStyle}>show done</button>
      </Link>
      <Link to={`/sortAsc`}>
        <button className={buttonStyle}>Sort Asc</button>
      </Link>
      <Link to={`/sortDesc`}>
        <button className={buttonStyle}>Sort Desc</button>
      </Link>
      <Link to={`/`}>
        <button className={buttonStyle}>Show All</button>
      </Link>
    </div>
  );
};

export default withRouter(UtilityBar);
