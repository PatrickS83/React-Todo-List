import React from "react";
import ToDoItem from "./ToDoItem";

const PostList = props => {
  return (
    <div className="card">
      <ul className="collection">
        {props.todoList.map(todo => (
          <ToDoItem key={todo.created} todoText={todo.text} />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
