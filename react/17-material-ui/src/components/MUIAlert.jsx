import React from 'react'
import Stack from "@mui/material/Stack";
import {Alert, AlertTitle} from "@mui/material";

function MUIAlert() {
    //* severity: alert türünü belirtir. (success, info, warning, error)
    //* variant: (standard, outlined, filled)
    return (
        <div>
            <Stack direction={"row"}>
                <Stack spacing={2} sx={{margin:"25px"}}>

                    <Alert severity={"info"} sx={{width:"205px"}}>Bilgi</Alert>
                    <Alert severity={"success"} sx={{width:"205px"}}>Başarılı</Alert>
                    <Alert severity={"warning"} sx={{width:"205px"}}>Uyarı</Alert>
                    <Alert severity={"error"} sx={{width:"205px"}}>Hata</Alert>

                    <Alert severity={"info"} variant={"outlined"} sx={{width:"205px"}}>Bilgi</Alert>
                    <Alert severity={"success"} variant={"outlined"} sx={{width:"205px"}}>Başarılı</Alert>
                    <Alert severity={"warning"} variant={"outlined"} sx={{width:"205px"}}>Uyarı</Alert>
                    <Alert severity={"error"} variant={"outlined"} sx={{width:"205px"}}>Hata</Alert>

                    <Alert severity={"info"} variant={"filled"} sx={{width:"205px"}}>Bilgi</Alert>
                    <Alert severity={"success"} variant={"filled"} sx={{width:"205px"}}>Başarılı</Alert>
                    <Alert severity={"warning"} variant={"filled"} sx={{width:"205px"}}>Uyarı</Alert>
                    <Alert severity={"error"} variant={"filled"} sx={{width:"205px"}}>Hata</Alert>
                </Stack>
                {/*Alert Title Kullanımı*/}
                <Stack spacing={2} sx={{margin:"25px"}}>
                    <Alert severity={"info"} sx={{width:"205px"}}><AlertTitle>Bilgi</AlertTitle>Bilgilendirme yapıldı<AlertTitle/></Alert>
                    <Alert severity={"success"} sx={{width:"205px"}}><AlertTitle>Başarılı</AlertTitle>İşlem başarılı</Alert>
                    <Alert severity={"warning"} sx={{width:"205px"}}><AlertTitle>Uyarı</AlertTitle>Uyarı mevcut</Alert>
                    <Alert severity={"error"} sx={{width:"205px"}}><AlertTitle>Hata</AlertTitle>Hata mesajı alındı</Alert>
                </Stack>
            </Stack>

        </div>
    )
}

export default MUIAlert
