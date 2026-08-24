import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
import { useContext, useState } from "react";
import { TodoContext } from "../store/TodoContext-store";

const TodoItems = () => {
  const { todoItems, clearCompleted } = useContext(TodoContext);

  const [filter, setFilter] = useState("all");

  const filteredItems = todoItems.filter((item) => {
    if (filter === "active") return !item.completed;
    if (filter === "completed") return item.completed;
    return true;
  });

  const totalTodos = todoItems.length;
  const completedTodos = todoItems.filter((item) => item.completed).length;
  const activeTodos = totalTodos - completedTodos;

  return (
    <>
      <div className={styles.todoStats}>
        <span>Total: {totalTodos}</span>
        <span>Active: {activeTodos}</span>
        <span>Completed: {completedTodos}</span>
      </div>

      <div className={styles.todoFilters}>
        <button
          className={`btn ${filter === "all" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={`btn ${
            filter === "active" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>

        <button
          className={`btn ${
            filter === "completed" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      <button
        className={`btn btn-outline-danger ${styles.clearButton}`}
        onClick={clearCompleted}
      >
        Clear Completed
      </button>

      <div className={styles.itemsContainer}>
        {filteredItems.map((item) => (
          <TodoItem
            key={item.id}
            todoId={item.id}
            todoName={item.name}
            todoDate={item.dueDate}
            completed={item.completed}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
