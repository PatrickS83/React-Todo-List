import React from "react";
import ToDoItem from "./ToDoItem";

const PostList = props => (
  <div className="card">
    <ul className="collection">
      {props.todoList.map(todo => (
        <ToDoItem
          key={todo.created}
          todoText={todo.text}
          deleteToDo={props.deleteToDo}
          markAsDone={props.markAsDone}
          created={todo.created}
          done={todo.done}
        />
      ))}
    </ul>
  </div>
);

export default PostList;
