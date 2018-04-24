import React, { Component } from "react";
import "./ToDoItem.css";

class ToDoItem extends Component {
  render() {
    return (
      <li className="collection-item todo-item">
        <span>{this.props.todoText}</span>
        <button
          className="waves-effect waves-light btn btn-small todo-delete"
          onClick={() => this.props.deleteToDo(this.props.created)}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default ToDoItem;
