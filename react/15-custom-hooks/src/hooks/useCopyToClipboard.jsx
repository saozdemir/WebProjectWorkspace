import React, {useState} from 'react'

function UseCopyToClipboard(text) {
    const [copied, setCopied] = useState(false);

    const copy = () => {
        navigator.clipboard.writeText(text)
            .then(() => setCopied(true))
            .catch(() => setCopied(false))
    }

    //! Array olarak döndük.
    return [copied, copy];
}

export default UseCopyToClipboard
