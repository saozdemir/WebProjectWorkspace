import React from 'react'
import useToggle from "../hooks/useToggle.jsx";

function Toggle() {
    const {open, toggle} = useToggle();

    return (
        <div>
            {open && <div style={{width: "100px", height: "100px", backgroundColor: "antiquewhite"}}>Box</div>}
            <button onClick={toggle}>{open ? "Gizle" : "Göster"}</button>
        </div>
    )
}

export default Toggle
