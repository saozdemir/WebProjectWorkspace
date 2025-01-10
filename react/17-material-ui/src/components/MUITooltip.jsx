import React from 'react'
import {Tooltip} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

function MUITooltip() {
    //* title: Tooltip metni
    //* placement: lokasyonu
    return (
        <div>
            <Tooltip title={"Silmek için tıklayınız"} placement={"right-end"}>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </div>
    )
}

export default MUITooltip
