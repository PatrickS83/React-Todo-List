import React from "react";
import ToDoItem from "./ToDoItem";

const PostList = props => {
  return (
    <div className="card">
      <ul className="collection">
        <ToDoItem todoList={props.todoList} />
      </ul>
    </div>
  );
};

export default PostList;
