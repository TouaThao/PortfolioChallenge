import React from "react";

export default function Header(props) {
  const headerStyle = {
    width: "100%",
    backgroundColor: "black",
  };

  return (
    <header style={headerStyle}>
      <nav>{props.children}</nav>
    </header>
  );
}
