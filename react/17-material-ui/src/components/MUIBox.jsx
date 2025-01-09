import React from 'react'
import {Box, Button} from "@mui/material";

const click = () => {
    alert("Click")
}

function MUIBox() {
    return (
        <div>
            <Box sx={{width: "200px", height: "200px", backgroundColor: "orange"}}/>
            <Box onClick={() => {
                click()
            }}
                 sx={{
                     width: 100,
                     height: 100,
                     borderRadius: 1,
                     bgcolor: 'primary.main',
                     '&:hover': {
                         bgcolor: 'primary.dark',
                     },
                 }}
            ></Box>
        </div>
    )
}

export default MUIBox
