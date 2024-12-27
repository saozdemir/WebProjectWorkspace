import './App.css'
import {users} from "./Login.jsx";
import Hello from "./Hello.jsx";

function App() {
    console.log(users);
    return (
        <div>
            {/*<Login></Login>*/}
            <Hello></Hello>
        </div>
    )
}

export default App
