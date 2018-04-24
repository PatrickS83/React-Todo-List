import React from "react";
import ToDoItem from "./ToDoItem";

const PostList = props => {
  return (
    <div className="card">
      <ul className="collection">
        {props.todoList.map(todo => (
          <ToDoItem
            key={todo.created}
            todoText={todo.text}
            deleteToDo={props.deleteToDo}
            created={todo.created}
          />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
