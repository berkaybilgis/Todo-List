import React from "react";

function ContentFooter({ todosLength }) {
  return (
    <div className="main">
      <footer className="footer">
        <span className="todo-count">
          <strong>{todosLength}</strong> items left
        </span>
        <ul className="filters">
          <li>
            <a>All</a>
          </li>
          <li>
            <a>Active</a>
          </li>
          <li>
            <a>Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    </div>
  );
}

export default ContentFooter;
