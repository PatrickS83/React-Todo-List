import React, { Component } from "react";
import "./ToDoItem.css";

class ToDoItem extends Component {
  render() {
    return (
      <li className="collection-item todo-item">
        <span>This is a list item</span>
        <button className="waves-effect waves-light btn btn-small todo-delete">
          Delete
        </button>
      </li>
    );
  }
}

export default ToDoItem;
