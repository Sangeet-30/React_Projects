import { useRef, useContext } from "react";
import styles from "./AddTodo.module.css";
import { MdAddBox } from "react-icons/md";
import { TodoContext } from "../store/TodoContext-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoContext);

  const todoNameEl = useRef();
  const todoDateEl = useRef();

  const addButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameEl.current.value;
    const todoDate = todoDateEl.current.value;
    todoNameEl.current.value = "";
    todoDateEl.current.value = "";
    addNewItem(todoName, todoDate);
  };

  return (
    <div className="container">
      <form
        className={`row ${styles.todoRow} ${styles.addTodo}`}
        onSubmit={addButtonClick}
      >
        <div className="col-12 col-sm-6">
          <input
            className={styles.todoInput}
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameEl}
          />
        </div>
        <div className="col-12 col-sm-4">
          <input className={styles.todoInput} type="date" ref={todoDateEl} />
        </div>
        <div className="col-12 col-sm-1">
          <button type="submit" className="btn btn-success">
            <MdAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
