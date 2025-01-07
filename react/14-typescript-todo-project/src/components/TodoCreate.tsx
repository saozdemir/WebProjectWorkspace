import {useDispatch} from "react-redux";
import {ChangeEvent, useState} from "react";
import {TodoType} from "../types/TodoType.tsx";
import {createTodo} from "../redux/todoSlice.tsx";

function TodoCreate() {
    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState<string>("");

    const handleCreateTodo = (): void => {
        if (newTodo.trim().length == 0) {
            alert("Todo Giriniz");
            return;
        }
        //! Eklenecek Todo'yu TodoType tipinde oluşturduk.
        const payload: TodoType = {
            id: Math.floor(Math.random() * 99999),
            content: newTodo
        }
        dispatch(createTodo(payload));
        setNewTodo("");
    }

    return (
        <div className={"todo-create"}>
            <input className={"todo-input"} type="text" value={newTodo}
                   onChange={(e: ChangeEvent<HTMLInputElement>) =>
                       setNewTodo(e.target.value)} placeholder={"Todo Giriniz..."}/>
            <button className={"todo-create-button"} onClick={handleCreateTodo}>Oluştur</button>
        </div>
    );
}

export default TodoCreate;