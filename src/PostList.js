import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import ToDoItem from "./ToDoItem";

const PostList = props => {
  const todoItems = props.todoList.length
    ? props.todoList.map((todo, i) => (
        <ToDoItem
          key={todo.created}
          todoList={props.todoList}
          todoText={todo.text}
          deleteToDo={props.deleteToDo}
          created={todo.created}
          markAsDone={props.markAsDone}
          done={todo.done}
          index={i}
          moveItem={props.moveItem}
        />
      ))
    : null;
  return (
    <div className="card">
      <ul className="collection">{todoItems}</ul>
    </div>
  );
};

export default PostList;
