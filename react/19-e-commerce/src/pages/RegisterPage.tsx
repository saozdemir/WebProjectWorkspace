/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 07 May 2025
 * <p>
 * @description:
 */
import React from 'react'
import '../css/RegisterPage.css'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Lock from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import { registerPageSchema } from '../schemas/RegisterPageSchema.tsx';

function RegisterPage() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const {values, handleSubmit, handleChange, errors, resetForm} = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema:registerPageSchema
    });
    console.log(errors)

    return (
        <div className={"register"}>
            <div className={"main"}>
                <form>
                    <div className={"form-div"}>
                        <TextField
                            id="username"
                            placeholder="Kullanıcı Adı"
                            value={values.username}
                            onChange={handleChange}
                            type={"text"}
                            className={"text-field"}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle/>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            variant="standard"
                            helperText={errors.username && <span style={{color: "red"}}>{errors.username}</span> }
                        />
                        <TextField
                            id="password"
                            placeholder="Şifre"
                            value={values.password}
                            onChange={handleChange}
                            type={showPassword ? 'text' : 'password'}
                            className={"text-field"}
                            variant="standard"
                            helperText={errors.password && <span style={{color: "red"}}>{errors.password}</span> }
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label={showPassword ? 'hide the password' : 'display the password'}
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                onMouseUp={handleMouseUpPassword}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                        <div className={"div-button"}>
                            <Button size={"small"} sx={{textTransform: "none", marginRight: "10px"}} variant={"contained"} color={"info"}>Kaydol</Button>
                            <Button size={"small"} sx={{textTransform: "none", backgroundColor: "#CDA735"}} variant={"contained"}>Temizle</Button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default RegisterPage
