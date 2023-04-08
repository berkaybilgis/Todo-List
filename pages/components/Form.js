import { useState, useEffect } from "react";
import ContentFooter from "./ContentFooter";

// başlangıçta hazır gelen veriler
const initialState = [
  { text: "Do your homework!", completed: false },
  { text: "Start creating a project today!", completed: false },
];

function Form() {
  const [todoItems, setTodoItems] = useState(initialState); // todo verilerinin depolandığı array
  const [text, setText] = useState(""); // yazılan verinin kayıt edilmesi için useState kullanıldı.
  const [filtered, setFiltered] = useState(); // filtrelenmiş verilerin depolanması

  // inputa girilen veri submit edildiğinde listeye ekler
  const handleSubmit = (e) => {
    e.preventDefault();
    text.trim() !== ""
      ? setTodoItems([...todoItems, { text: text, completed: false }])
      : null;
  };

  // sayfa her yenilendiğinde todoItems içerisindeki verileri filtered'a atar
  useEffect(() => {
    setFiltered(todoItems);
  }, []);

  // todoItems her değiştiğinde inputun içini temizler ve filtered'a todoItems verisini ekler
  useEffect(() => {
    setText("");
    setFiltered(todoItems);
  }, [todoItems]);

  // silme işlemi yapan fonksiyon
  const deleteTodo = (index) => {
    setTodoItems(todoItems.filter((item, i) => i !== index));
  };

  // listede bir item işaretlenmesi durumunda üzerini çizip onaylandığını gösteren fonksiyon
  const toggleCompleted = (index) => {
    setTodoItems((todoItems) =>
      todoItems.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="main">
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* input ile yazılan verilerin girileceği bölüm oluşturuldu. */}
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      {/* todo list map işlemi ile görüntülendi. */}
      <ul className="todo-list">
        {filtered &&
          filtered.map((todo, i) => {
            return (
              <li className={todo.completed ? "completed" : ""} key={i}>
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    onChange={() => toggleCompleted(i)}
                    checked={todo.completed}
                  />
                  <label property="text">{todo.text}</label>
                  <button
                    className="destroy"
                    onClick={() => deleteTodo(i)}
                  ></button>
                </div>
              </li>
            );
          })}
      </ul>
      {/* ContenFooter dosyasına proplar gönderildi */}
      {todoItems.length !== 0 && (
        <ContentFooter
          setFiltered={setFiltered}
          setTodos={setTodoItems}
          todos={todoItems}
          todosLength={todoItems.length}
        />
      )}
    </div>
  );
}

export default Form;
