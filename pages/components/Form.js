import { useState, useEffect } from "react";

const initialState = ["Text is empty!"];

function Form() {
  const [todoItems, setTodoItems] = useState(initialState); // todo verilerinin depolandığı array
  const [text, setText] = useState(""); // yazılan verinin kayıt edilmesi için useState kullanıldı.

  // inputa girilen veri submit edildiğinde listeye ekler
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoItems([...todoItems, text]);
  };

  // submit işlemi yapıldığında inputun içeriğini temizle
  useEffect(() => {
    setText("");
  }, [todoItems]);

  // silme işlemi yapan fonksiyon
  const deleteTodo = (index) => {
    setTodoItems((todoItems) => todoItems.filter((item, i) => i !== index));
  };

  return (
    <div>
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
        {todoItems &&
          todoItems.map((todo, i) => {
            return (
              <li className="[if(done, 'completed')]" key={i}>
                <div className="view">
                  <input property="done" className="toggle" type="checkbox" />
                  <label property="text">{todo}</label>
                  <button
                    className="destroy"
                    mv-action="delete(todo)"
                    onClick={() => deleteTodo(i)}
                  ></button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Form;
