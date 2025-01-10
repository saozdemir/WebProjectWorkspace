import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

function MUIAppBar() {
    const [anchorEl, setAnchorEl] = useState(null);

    const openMenu = (e) => {
        //* Gelen event'in targeti bir button. SetAnchor ile state i güncelleyerek menünün o component altında açılmasını sağlıyoruz.
        setAnchorEl(e.currentTarget)
        console.log(e.currentTarget)
    }

    const closeMenu = () => {
        setAnchorEl(null);
    }

    const openControl = anchorEl ? true : false;

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <HomeIcon sx={{color: "antiquewhite"}}/>
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        MUI
                    </Typography>
                    <Stack direction="row" sx={{marginRight: "auto"}}>
                        <Button sx={{color: "white"}} onClick={openMenu}>Eğitimler</Button>
                        <Button sx={{color: "white"}}>Kaynaklar</Button>
                        <Button sx={{color: "white"}}>İletişim</Button>
                    </Stack>
                    {/* Butona Tıklanınca Açılacak menüyü tanımladık. Yukarıda Tanımlanan anchorEl state ini izliyor.*/}
                    {/* anchorEl state'inin durumunu izliyor. Durumu değişince dönen elementin altıda açılacak.*/}
                    <Menu anchorEl={anchorEl} open={openControl} onClose={closeMenu}>
                        <MenuItem>Java</MenuItem>
                        <MenuItem>JavaScript</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default MUIAppBar
