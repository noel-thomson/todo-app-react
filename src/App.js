import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";

export class App extends Component {
  state = {
    todos: [
      { id: 1, text: "walk dog", completed: false },
      { id: 2, text: "eat breakfast", completed: false },
      { id: 3, text: "drink coffee", completed: false },
    ],
  };
  handleCheck = (id) => {
    this.setState({
      todos: this.state.todos.map((el) => {
        if (el.id === id) {
          el.completed = !el.completed;
        }
        return el;
      }),
    });
  };
  removeTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((el) => el.id !== id)],
    });
  };
  addTodo = (text) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      text,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div>
        <Header
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Todos
          todos={this.state.todos}
          addTodo={this.addTodo}
          handleCheck={this.handleCheck}
          removeTodo={this.removeTodo}
        />
      </div>
    );
  }
}

export default App;
