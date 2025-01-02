import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, setValue} from "./redux/features/counterSlice.jsx";

function Counter() {
    const counter = useSelector((store) => store.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <input type={"text"} readOnly={true} value={counter.value}/>
            </div>
            <div>
                <button type={"number"} onClick={() => (dispatch(increment()))}>Artır</button>
                <button type={"number"} onClick={()=> (dispatch(decrement()))}>Azalt</button>
            </div>
            <div>
                <input type={"number"} onChange={(e)=>dispatch(setValue(e.target.value))}/>
            </div>

        </div>
    );
}

export default Counter;