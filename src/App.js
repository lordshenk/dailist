import React, { Component } from "react";
import "./styles.css";
import TodoApp from "./components/TodoApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp />
      </div>
    );
  }
}

export default App;
