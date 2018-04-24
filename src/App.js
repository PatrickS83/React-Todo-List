import React, { Component } from "react";
import PostList from "./PostList";
import CreatePost from "./CreatePost";

class App extends Component {
  state = {
    todos: [
      { text: "Testitem", created: 43434 },
      { text: "Testitem2", created: 43434545 }
    ]
  };

  addToDo = todoText => {
    const todos = [...this.state.todos];
    todos.push({ text: todoText, created: Date.now() });
    this.setState({ todos });
  };

  render() {
    return (
      <div className="container">
        <h1>TODO - List</h1>
        <CreatePost addToDo={this.addToDo} />
        <PostList todoList={this.state.todos} />
      </div>
    );
  }
}

export default App;
