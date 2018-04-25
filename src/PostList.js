import React from "react";
import ToDoItem from "./ToDoItem";

const PostList = props => (
    <div className="card">
      <ul className="collection">
        {props.todoList.length
          ? props.todoList.map(todo => (
              <ToDoItem
                key={todo.created}
                todoText={todo.text}
                deleteToDo={props.deleteToDo}
                created={todo.created}
              />
            ))
          : null}
      </ul>
    </div>
  );

export default PostList;
