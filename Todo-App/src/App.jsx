import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import TodoContextProvider from "./store/TodoContext-store";
import Footer from "./components/Footer";

function App() {
  return (
    <TodoContextProvider>
      <div className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </div>
      <Footer></Footer>
    </TodoContextProvider>
  );
}

export default App;
