import React from "react";

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
    </header>
  );
}

const headerStyle = {
  textAlign: "center",
  color: "white",
  background: "#333",
  padding: 10,
  width: 400,
  margin: "0 auto",
  marginTop: 40,
};
