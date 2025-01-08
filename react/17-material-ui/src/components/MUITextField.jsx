import React from 'react'
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import log from "eslint-plugin-react/lib/util/log.js";

function MUITextField() {
    return (
        <div>
            {/*Label and Variat*/}
            <div style={{margin: "5px"}}>
                <TextField label="İsim" variant="outlined"></TextField>
                <TextField label="İsim" variant="filled"></TextField>
                <TextField label="İsim" variant="standard"></TextField>
            </div>
            {/*Color*/}
            <div style={{margin: "5px"}}>
                <TextField label="İsim" variant="outlined" color="warning"></TextField>
            </div>
            {/*Helper Text - Type - Disabled - Value*/}
            <div style={{margin: "5px"}}>
                <TextField label="İsim" variant="outlined" color="warning" helperText="İsminizi Giriniz"></TextField>
                <TextField type="password" label="Şifre" variant="outlined" color="error"
                           helperText="Şifrenizi Giriniz"></TextField>
                <TextField disabled variant="outlined" color="error" helperText="Kullancı ID"
                           value={123456}></TextField>
                <TextField InputProps={{readOnly: true}} variant="outlined" color="error" helperText="Kullancı ID"
                           value={123456}></TextField>
            </div>
            {/*Icon Ekleme - Başına ve Sonuna*/}
            <div style={{margin: "5px"}}>
                <TextField label="İsminizi giriniz."
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        ),
                }} variant="outlined"/>
                <TextField label="Şifre" type="password"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <VisibilityIcon />
                            </InputAdornment>
                        ),
                    }} variant="outlined"/>
            </div>
            {/*Size ekleme*/}
            <div>
                <TextField label="İsim" variant="outlined" size="small"></TextField>
                <TextField label="İsim" variant="outlined" size="medium"></TextField>
            </div>
        </div>
    )
}

export default MUITextField
