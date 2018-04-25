import React from "react";
import "./ToDoItem.css";

const ToDoItem = props => (
  <li className={`collection-item todo-item ${props.done && "teal lighten-4"}`}>
    <button
      className="waves-effect waves-light btn btn-small todo-delete"
      onClick={() => props.markAsDone(props.created)}
    >
      Done
    </button>
    <span> {props.todoText}</span>
    <button
      className="waves-effect waves-light btn btn-small todo-delete"
      onClick={() => props.deleteToDo(props.created)}
    >
      Delete
    </button>
  </li>
);

export default ToDoItem;
