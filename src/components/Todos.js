import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

export class Todos extends Component {
  render() {
    return (
      <div style={todosWrapper}>
        <AddTodo addTodo={this.props.addTodo} />
        <ul style={todosStyle}>
          {this.props.todos.map((el) => (
            <TodoItem
              key={el.id}
              todoItem={el}
              handleCheck={this.props.handleCheck}
              removeTodo={this.props.removeTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const todosWrapper = {
  width: 400,
  margin: "0 auto",
  background: "#DDD",
  paddingBottom: 40,
  minHeight: 500,
};
const todosStyle = {
  listStyleType: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
