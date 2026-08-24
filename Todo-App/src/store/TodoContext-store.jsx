import { createContext } from "react";
import { useReducer, useEffect } from "react";

export const TodoContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
  toggleItem: () => {},
  editItem: () => {},
  clearCompleted: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "ADD_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      {
        id: crypto.randomUUID(),
        name: action.payload.itemName,
        dueDate: action.payload.itemDate,
        completed: false,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.id !== action.payload.itemId,
    );
  } else if (action.type === "TOGGLE_ITEM") {
    newTodoItems = currTodoItems.map((item) =>
      item.id === action.payload.itemId
        ? { ...item, completed: !item.completed }
        : item,
    );
  } else if (action.type === "EDIT_ITEM") {
    newTodoItems = currTodoItems.map((item) =>
      item.id === action.payload.itemId
        ? {
            ...item,
            name: action.payload.itemName,
            dueDate: action.payload.itemDate,
          }
        : item,
    );
  } else if (action.type === "CLEAR_COMPLETED") {
    newTodoItems = currTodoItems.filter((item) => !item.completed);
  }

  return newTodoItems;
};

const TodoContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, [], () => {
    const savedTodos = localStorage.getItem("todoItems");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  const addNewItem = (itemName, itemDate) => {
    const newItemAction = {
      type: "ADD_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (itemId) => {
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemId,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const toggleItem = (itemId) => {
    dispatchTodoItems({
      type: "TOGGLE_ITEM",
      payload: {
        itemId,
      },
    });
  };

  const editItem = (itemId, itemName, itemDate) => {
    dispatchTodoItems({
      type: "EDIT_ITEM",
      payload: {
        itemId,
        itemName,
        itemDate,
      },
    });
  };

  const clearCompleted = () => {
    dispatchTodoItems({
      type: "CLEAR_COMPLETED",
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
        toggleItem,
        editItem,
        clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
