import React, {useState} from 'react'

function UseCounter() {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }


    //! Bir nesne dönüyoruz.
    return {
        count, increase, decrease
    }
}

export default UseCounter
