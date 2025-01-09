import React from 'react'
import {Divider, Stack} from "@mui/material";

function MUIStack() {
    return (
        <div>
            <Stack direction={"column"} spacing={5}
                   divider={<Divider orientation="horizontal" flexItem/>}>
                <div>Item1</div>
                <div>Item2</div>
                <div>Item3</div>

            </Stack>
            {/* Default direction = column gelir.*/}
            <Stack direction={"row"} spacing={5}
                   divider={<Divider orientation="vertical" flexItem/>}>
                <div>Item1</div>
                <div>Item2</div>
                <div>Item3</div>

            </Stack>
            {/* Telefon ve küçük cihazlar için ayarlama Bootstrap gibi*/}
            <Stack direction={{xs: "column", sm: "row"}} spacing={5}
                   divider={<Divider orientation="vertical" flexItem/>}>
                <div>Item1</div>
                <div>Item2</div>
                <div>Item3</div>

            </Stack>
        </div>
    )
}

export default MUIStack
