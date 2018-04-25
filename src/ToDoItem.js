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
    <div className="todo-item-buttons">
      <i
        className="material-icons"
        onClick={() => props.deleteToDo(props.created)}
      >
        delete
      </i>
      {props.index !== props.todoList.length - 1 ? (
        <i
          className="material-icons"
          onClick={() => props.moveItem(props.created, "down")}
        >
          arrow_downward
        </i>
      ) : null}
      {props.index ? (
        <i
          className="material-icons"
          onClick={() => props.moveItem(props.created, "up")}
        >
          arrow_upward
        </i>
      ) : null}
    </div>
  </li>
);

export default ToDoItem;
