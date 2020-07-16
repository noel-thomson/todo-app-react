import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    text: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 20,
        }}
      >
        <input
          type="text"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Add Something..."
          style={{
            padding: 5,
            textAlign: "center",
            fontSize: 12,
            fontWeight: "bold",
          }}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{
            padding: 5,
            fontSize: 12,
            fontWeight: "bold",
            cursor: "pointer",
          }}
        />
      </form>
    );
  }
}
