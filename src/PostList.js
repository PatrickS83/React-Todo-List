import React from "react";
import ToDoItem from "./ToDoItem";

const PostList = props => {
  return (
    <div>
      <ul className="card">
        <ToDoItem />
      </ul>
    </div>
  );
};

export default PostList;
