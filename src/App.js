import React, { Component } from "react";
import PostList from "./PostList";
import CreatePost from "./CreatePost";
class App extends Component {
  render() {
    return (
      <div className="container">
        <h1> TODO - List</h1>
        <CreatePost />
        <PostList />
        
      </div>
    );
  }
}

export default App;
