import React from 'react'
import {Button} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function MUIButton() {
    return (
        <div>
            {/* Buton Çerçevesi*/}
            <div style={{marginBottom: "50px"}}>
                <Button variant="text">Kaydol</Button>
                <Button variant="contained">Kaydol</Button>
                <Button variant="outlined">Kaydol</Button>
            </div>

            {/* Buton rengi*/}
            <div style={{marginBottom: "50px"}}>
                <div>
                    <Button color="primary">Giriş Yap</Button>
                    <Button color="error">Giriş Yap</Button>
                    <Button color="warning">Giriş Yap</Button>
                    <Button color="secondary">Giriş Yap</Button>
                    <Button color="success">Giriş Yap</Button>
                </div>

                <Button color="primary" variant="contained">Giriş Yap</Button>
                <Button color="error" variant="contained">Giriş Yap</Button>
                <Button color="warning" variant="contained">Giriş Yap</Button>
                <Button color="secondary" variant="contained">Giriş Yap</Button>
                <Button color="success" variant="contained">Giriş Yap</Button>
            </div>

            {/* Size*/}
            <div style={{marginBottom: "50px"}}>
                <Button size={"small"} variant="contained">Geri Dön</Button>
                <Button size={"medium"} variant="contained">Geri Dön</Button>
                <Button size={"large"} variant="contained">Geri Dön</Button>
            </div>

            {/*Icon ekleme startIcon: başına ekle iconu, endIcon: sonuna ekle*/}
            <div style={{marginBottom: "50px"}}>
                <Button size={"small"}
                        variant="contained"
                        color={"warning"}
                        startIcon={<AddCircleIcon/>}>Ekle</Button>
                <Button size={"small"}
                        variant="contained"
                        color={"warning"}
                        endIcon={<AddCircleIcon/>}>Ekle</Button>
            </div>
        </div>
    )
}

export default MUIButton
