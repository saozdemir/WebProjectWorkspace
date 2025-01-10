import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {Alert} from "@mui/material";

function MUISnackbar() {
    //* Uyarı- Bilgilendirme için popup açar.
    //* open: görünür hale getirir.
    //* message: görüntülecenek içerik metni
    //! autoHideDuration: belirlenen süre sonunda onClose'u tetikler
    //* onClose: kapatma
    //* anchorOrigin: Snackbar'ın hangi konumda çıkacağını belirlemekl için kullanılır.


    const [openSnackbar, setOpenSnackbar] = useState(false);
    const handleClick = () => {
        setOpenSnackbar(true);
    }

    const handleClose = () => {
        setOpenSnackbar(false);
    }

    //! Burada küçük bir component tanımlaması yapıldı.
    //! Bu action Snackbar'ın action props'una gönderilecek.
    //! Burada bir parent element arasına yazılmalı. Fragment <></> kullanıldı.
    //! () parantez kullanılmalıdır.
    const action = (
        <>
            <Button size={"small"} color={"info"} onClick={handleClose}>Kapat</Button>
            <IconButton sx={{color: "white"}}>
                <CloseIcon onClick={handleClose}/>
            </IconButton>
        </>
    );

    return (
        <div>
            <Button onClick={handleClick}>Snackbarı Aç</Button>
            <Snackbar open={openSnackbar}
                      message={"Hata oluştu"}
                      action={action}
                      autoHideDuration={2000} /* Bu süre sonunda "onClose" fonksiyonunu çalıştırıyor*/
                      onClose={handleClose}
                      anchorOrigin={{vertical: "bottom", horizontal: "center"}}>
                {/*<Alert severity={"info"} sx={{width:"205px"}}>Bilgi</Alert>*/}
                {/* Yukarıdaki gibi alert eklenirse sadece o içerik görünüt oluyor    */}
            </Snackbar>
        </div>
    )
}

export default MUISnackbar
