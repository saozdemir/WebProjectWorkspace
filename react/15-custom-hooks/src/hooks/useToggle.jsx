import React, {useState} from 'react'

function UseToggle() {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }
    return (
        {open, toggle}
    )
}

export default UseToggle
