import React from 'react'
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';

import {Box, Stack} from "@mui/material";

function MUIBadge() {
    //* badgeContent: bildirim sayısı
    //* color: renk verme
    //* max: verien max değerden daha fazla bildirim varsa + ile gösterir
    //* anchorOrigin: bildirim sayısının konumu
    //* variant: bildirim sayısı yoksa nokta koymak için
    return (
        <Stack direction={"row"} spacing={5} sx={{margin: "20px 50px"}}>
            <Badge badgeContent={5} color={"primary"} max={9}>
                <NotificationsIcon/>
            </Badge>
            <Badge badgeContent={"A"} color={"error"} max={9} onClick={() => {
                alert("15 hata")
            }}>
                <ErrorIcon/>
            </Badge>
            <Badge badgeContent={15} color={"warning"} max={9} anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                   onClick={() => {
                       alert("15 uyarı")
                   }}>
                <WarningIcon/>
            </Badge>
            <Badge badgeContent={5} color={"primary"} variant={"dot"} max={9}>
                <NotificationsIcon/>
            </Badge>
        </Stack>
    )
}

export default MUIBadge
