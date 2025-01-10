import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function MUIAvatar() {
    //https://randomuser.me/api/portraits/men/1.jpg
    //* src: resim kaynağı
    //* alt: resim yüklenmezse yazılacak metin
    return (
        <div>
            <Stack spacing={2}>
                <Avatar src={"https://randomuser.me/api/portraits/men/1.jpg"}></Avatar>
                <Avatar sx={{width: 56, height: 56}} src={"https://randomuser.me/api/portraits/men/1.jpg"}></Avatar>
                <Avatar sx={{bgcolor: "gold"}}>SA</Avatar>
                <Avatar sx={{bgcolor: "primary.main"}}>EÖ</Avatar>
                <Avatar sx={{bgcolor: "warning.main"}}>EÖ</Avatar>
            </Stack>
        </div>
    )
}

export default MUIAvatar
