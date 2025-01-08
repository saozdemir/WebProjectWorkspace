import React from 'react'
import useCopyToClipboard from "../hooks/useCopyToClipboard.jsx";

function Copy() {
    const [copied, copy] = useCopyToClipboard("Ahmet");
    return (
        <div>
            {
                copied && "Kopyalandı"
            }
            <button onClick={copy}>Kopyala</button>
        </div>
    )
}

export default Copy
