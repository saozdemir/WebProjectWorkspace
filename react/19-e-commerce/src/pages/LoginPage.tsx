/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 07 May 2025
 * <p>
 * @description:
 */
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import '../css/LoginPage.css'
import type {UserType} from "../types/Types.tsx";
import loginPageService from "../services/LoginPageService.tsx";
import {toast} from "react-toastify";
import {useFormik} from "formik";
import {registerPageSchema} from "../schemas/RegisterPageSchema.tsx";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Lock from "@mui/icons-material/Lock";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {setCurrentUser, setLoading} from "../redux/appSlice.tsx";


interface CheckUserType {
    result: boolean,
    currentUser: UserType | null
}

function LoginPage() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);

    const checkUser = (userList: UserType[], username: string, password: string): CheckUserType => {
        const response: CheckUserType = {result: false, currentUser: null};
        userList.forEach((user: UserType) => {
            if (user.username === username && user.password === password) {
                response.result = true;
                response.currentUser = user;
            }
        })
        return response;
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const submit = async (values: any, actions: any) => {
        try {
            dispatch(setLoading(true));
            const response: UserType[] = await loginPageService.login()
            if (response) {
                const checkUserResponse = checkUser(response, values.username, values.password);
                if(checkUserResponse.result && checkUserResponse.currentUser) {
                    toast.success("Giriş başarılı!");
                    dispatch(setCurrentUser(checkUserResponse.currentUser));
                    navigate("/");
                } else {
                    toast.error("Kullanıcı bulunamadı! Lütfen kayıt olun.");
                }
            }
        } catch (e) {
            toast.error("Giriş başarısız! Lütfen tekrar deneyin.");
        } finally {
            dispatch(setLoading(false));
        }

    }

    const {values, handleSubmit, handleChange, errors, resetForm} = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: submit,
        validationSchema: registerPageSchema
    });

    const clear = () => {
        resetForm();
    }
    console.log(errors)

    return (
        <div className={"login"}>
            <div className={"main"}>
                <form onSubmit={handleSubmit}>
                    <div className={"form-div"}>
                        <h3>Giriş Yap</h3>
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
                            helperText={errors.username && <span style={{color: "red"}}>{errors.username}</span>}
                        />
                        <TextField
                            id="password"
                            placeholder="Şifre"
                            value={values.password}
                            onChange={handleChange}
                            type={showPassword ? 'text' : 'password'}
                            className={"text-field"}
                            variant="standard"
                            helperText={errors.password && <span style={{color: "red"}}>{errors.password}</span>}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock/>
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
                                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                        <div className={"div-button"}>
                            <Button type={"submit"} size={"small"} sx={{textTransform: "none", marginRight: "10px"}}
                                    variant={"contained"} color={"info"}>Giriş</Button>
                            <Button onClick={clear} size={"small"}
                                    sx={{textTransform: "none", backgroundColor: "#efa32c"}}
                                    variant={"contained"}>Temizle</Button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )

}

export default LoginPage

