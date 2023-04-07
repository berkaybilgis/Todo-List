import { useState } from "react";

function ContentFooter({
  todosLength,
  todos,
  setTodos,
  filtered,
  setFiltered,
}) {
  // All butonunun filtreleme fonksiyonu
  const allHandler = () => {
    setFiltered(todos);
  };

  // Active butonunun filtreleme fonksiyonu
  const activeHandler = () => {
    setFiltered(todos.filter((todo) => todo.completed === false));
  };

  // Completed butonunun filtreleme fonksiyonu
  const completedHandler = () => {
    setFiltered(todos.filter((todo) => todo.completed === true));
  };

  // Clear completed butonunun filtreleme fonksiyonu
  const clearHandler = () => {
    setTodos(todos.filter((todo) => todo.completed === false));
  };

  return (
    <div className="main">
      <footer className="footer">
        <span className="todo-count">
          <strong>{todosLength}</strong>{" "}
          {todosLength <= 1 ? "item left" : "items left"}{" "}
          {/*todo sayısına göre items veya item yazdırır */}
        </span>
        <ul className="filters">
          <li>
            <a onClick={allHandler}>All</a>
          </li>
          <li>
            <a onClick={activeHandler}>Active</a>
          </li>
          <li>
            <a onClick={completedHandler}>Completed</a>
          </li>
        </ul>
        <button className="clear-completed" onClick={clearHandler}>
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default ContentFooter;
