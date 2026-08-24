import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";
import { TodoContext } from "../store/TodoContext-store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoContext);

  return (
    todoItems.length === 0 && (
      <div className={styles.welcomeMessage}>
        <h2>No todos yet</h2>
        <p>Add your first task to get started.</p>
      </div>
    )
  );
};

export default WelcomeMessage;
