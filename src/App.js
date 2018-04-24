import React, { Component } from "react";
import PostList from "./PostList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1> TODO - List</h1>
        <PostList />
      </div>
    );
  }
}

export default App;
