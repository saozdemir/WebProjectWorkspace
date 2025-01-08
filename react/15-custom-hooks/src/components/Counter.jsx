import React from 'react'
import useCounter from "../hooks/useCounter.jsx";

function Counter() {
    //! Nesne döndüğü için object destructing yaptık.
    const {count, increase, decrease} = useCounter();
    return (
        <div>
            <div>{count}</div>
            <button onClick={increase}>Arttır</button>
            <button onClick={decrease}>Azalt</button>
        </div>
    )
}

export default Counter
