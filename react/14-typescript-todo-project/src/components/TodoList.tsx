import Todo from "./Todo.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store.tsx";
import {TodoType} from "../types/TodoType.tsx";

function TodoList() {
    const {todos} = useSelector((state: RootState) => state.todo);
    return (
        <div>
            {
                todos && todos.map((todo: TodoType) => (
                    <Todo key={todo.id} todoProps={todo}></Todo>
                ))
            }
        </div>
    );
}

export default TodoList;