import { useState } from "react";
import Form from "./Form";

function Header() {
  return (
    <div className="header">
      <h1>todos</h1>
      <Form />
    </div>
  );
}

export default Header;
