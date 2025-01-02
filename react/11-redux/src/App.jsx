import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./redux/counterSlice.jsx";
import UserList from "./UserList.jsx";

function App() {
    //! useSelector ile store altında bulunan counter state'ine eriştik.
    const {value} = useSelector((store) => store.counter);

    const dispatch = useDispatch();
    console.log(value);
    return (
        <div>
            <div>{value}</div>
            <div>
                <button onClick={() => dispatch(increment())}>Arttır</button>
                <button onClick={() => dispatch(decrement())}>Azalt</button>
            </div>
            <div>
                <UserList></UserList>
            </div>
        </div>
    )
}

export default App
