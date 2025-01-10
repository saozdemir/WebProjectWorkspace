import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function MUIAvatar() {
    //https://randomuser.me/api/portraits/men/1.jpg
    return (
        <div>
            <Stack>
                <Avatar src={"https://randomuser.me/api/portraits/men/1.jpg"}></Avatar>
                <Avatar sx={{width: 56, height: 56}} src={"https://randomuser.me/api/portraits/men/1.jpg"}></Avatar>
            </Stack>
        </div>
    )
}

export default MUIAvatar
