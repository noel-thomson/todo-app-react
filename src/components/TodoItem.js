import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      width: 350,
      backgroundColor: "#AAA",
      padding: 10,
      borderBottom: "1px solid #DDD",
      textDecoration: this.props.todoItem.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, text } = this.props.todoItem;
    return (
      <li style={this.getStyle()}>
        <input
          style={checkStyle}
          type="checkbox"
          onChange={this.props.handleCheck.bind(this, id)}
        ></input>
        {text}
        <div style={btnStyle} onClick={this.props.removeTodo.bind(this, id)}>
          <p style={pStyle}>x</p>
        </div>
      </li>
    );
  }
}

const checkStyle = {
  marginRight: "10px",
};
const btnStyle = {
  background: "#e74c3c",
  color: "white",
  border: "none",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
  height: "20px",
  width: "20px",
  marginLeft: "20px",
  display: "flex",
  justifyContent: "center",
};
const pStyle = {
  transform: "translateY(-11%)",
  height: "100%",
};

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired,
};

export default TodoItem;
