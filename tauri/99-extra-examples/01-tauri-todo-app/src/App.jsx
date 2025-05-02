import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import {ToastContainer} from "react-toastify";

function App() {

  return (
    <div>
      <Header></Header>
      <div className="App">
        <TodoCreate></TodoCreate>
        <TodoList></TodoList>
      </div>
      <ToastContainer position={"top-right"} autoClose={1200}/>
    </div>
  )
}

export default App
