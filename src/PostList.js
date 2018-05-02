import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import ToDoItem from "./ToDoItem";
import UtilityBar from "./UtilityBar";
import "./Animations.css";

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
      <UtilityBar />
      <ul className="collection">
        <CSSTransitionGroup
          transitionName="todoItem"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
          transitionAppearTimeout={200}
          transitionAppear
        >
          {todoItems}
        </CSSTransitionGroup>
      </ul>
    </div>
  );
};

export default PostList;
