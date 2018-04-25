import React, { Component } from "react";
import PostList from "./PostList";
import CreatePost from "./CreatePost";

class App extends Component {
  state = {
    todos: [
      { text: "Testitem", created: 43434, done: false },
      { text: "Testitem2", created: 43434545, done: true }
    ]
  };

  addToDo = todoText => {
    const todos = [...this.state.todos];
    todos.push({ text: todoText, created: Date.now() });
    this.setState({ todos });
  };

  deleteToDo = todoID => {
    const todos = [...this.state.todos];
    const index = todos.findIndex(todo => todo.created === todoID);
    todos.splice(index, 1);
    this.setState({ todos });
  };

  markAsDone = todoID => {
    const todos = [...this.state.todos];
    const index = todos.findIndex(todo => todo.created === todoID);
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  };

  render() {
    return (
      <div className="container">
        <h1>TODO - List</h1>
        <CreatePost addToDo={this.addToDo} />
        <PostList
          todoList={this.state.todos}
          deleteToDo={this.deleteToDo}
          markAsDone={this.markAsDone}
        />
      </div>
    );
  }
}

export default App;
