import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

function MUIDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    //* open: açmak için
    //* onClose: kapatmak için
    //* anchor: açılacak onum
    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>Aç</Button>
            <Drawer open={isOpen} onClose={() => setIsOpen(false)} anchor={"right"}>
                <Box sx={{width: "500px"}}>
                    <h3>Başlık</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur s</p>
                </Box>
            </Drawer>

        </div>
    )
}

export default MUIDrawer
