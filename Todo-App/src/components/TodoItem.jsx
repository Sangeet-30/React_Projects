import { RiDeleteBin5Line } from "react-icons/ri";
import { useContext, useState } from "react";
import { TodoContext } from "../store/TodoContext-store";
import styles from "./TodoItem.module.css";

const TodoItem = ({ todoName, todoDate, todoId, completed }) => {
  const { deleteItem, toggleItem, editItem } = useContext(TodoContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(todoName);
  const [editDate, setEditDate] = useState(todoDate);

  return (
    <div className="container">
      <div className={`row ${styles.todoRow}`}>
        {isEditing ? (
          <>
            <div className="col">
              <input
                className={styles.editInput}
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            </div>

            <div className="col-auto">
              <input
                className={styles.editInput}
                type="date"
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
              />
            </div>

            <div className="col-auto">
              <button
                type="button"
                className={`btn btn-success ${styles.todoActionBtn}`}
                onClick={() => {
                  if (editName.trim() && editDate) {
                    editItem(todoId, editName.trim(), editDate);
                    setIsEditing(false);
                  }
                }}
              >
                Save
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="col-auto">
              <input
                className={styles.todoCheck}
                type="checkbox"
                checked={completed}
                onChange={() => toggleItem(todoId)}
              />
            </div>

            <div
              className={`col ${styles.todoName} ${
                completed ? styles.completed : ""
              }`}
            >
              {todoName}
            </div>

            <div className={`col-auto ${styles.todoDate}`}>{todoDate}</div>

            <div className={`col-auto ${styles.todoActions}`}>
              <button
                type="button"
                className={`btn btn-danger ${styles.todoActionBtn}`}
                onClick={() => deleteItem(todoId)}
              >
                <RiDeleteBin5Line />
              </button>

              <button
                type="button"
                className={`btn btn-primary ${styles.todoActionBtn}`}
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
