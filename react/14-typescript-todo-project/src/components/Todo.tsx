import {IoMdRemoveCircleOutline} from "react-icons/io";
import {IoIosCheckmarkCircleOutline} from "react-icons/io";
import {TbEditCircle} from "react-icons/tb";
import {TodoType} from "../types/TodoType.tsx";
import {useDispatch} from "react-redux";
import {removeTodoById, updateTodo} from "../redux/todoSlice.tsx";
import {ChangeEvent, useState} from "react";

interface TodoProps {
    todoProps: TodoType,
}

function Todo({todoProps}: TodoProps) {
    const dispatch = useDispatch();

    const [editable, setEditable] = useState<boolean>(false);

    const [updateContent, setUpdateContent] = useState<string>(todoProps.content);

    const handleRemoveTodo = (): void => {
        dispatch(removeTodoById(todoProps.id));
    }

    const handleTodoUpdate=():void=>{
        const payload:TodoType={
            id:todoProps.id,
            content:updateContent
        }
        dispatch(updateTodo(payload));
        setEditable(false)
    }

    return (
        <div className={"todo-wrapper"}>
            <div>
                {
                    editable? <input className={"todo-input"} type="text" value={updateContent} onChange={(e:ChangeEvent<HTMLInputElement>)=>setUpdateContent(e.target.value)}/> : <div>{todoProps.content}</div>
                }
            </div>
            <div>
                <IoMdRemoveCircleOutline className={"icons delete-icon"} onClick={handleRemoveTodo}/>

                {
                    editable ? <IoIosCheckmarkCircleOutline className={"icons approve-icon"} onClick={handleTodoUpdate}/>
                        : <TbEditCircle className={"icons update-icon"} onClick={()=> setEditable(true)}/>
                }
            </div>
        </div>
    );
}

export default Todo;