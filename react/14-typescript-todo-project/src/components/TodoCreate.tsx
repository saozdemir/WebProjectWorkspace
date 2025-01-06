
function TodoCreate() {
    return (
        <div className={"todo-create"}>
            <input className={"todo-input"} type="text" placeholder={"Todo Giriniz..."}/>
            <button className={"todo-create-button"}>Oluştur</button>
        </div>
    );
}

export default TodoCreate;