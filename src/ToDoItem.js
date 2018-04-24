import React, { Component } from "react";
import "./ToDoItem.css";

class ToDoItem extends Component {
  render() {
    return this.props.todoList.map(todo => (
      <li key={todo.created} className="collection-item todo-item">
        <span>{todo.text}</span>
        <button className="waves-effect waves-light btn btn-small todo-delete">
          Delete
        </button>
      </li>
    ));
  }
}

export default ToDoItem;
