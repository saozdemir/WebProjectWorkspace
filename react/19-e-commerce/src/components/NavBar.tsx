/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 25 Jul 2025
 * <p>
 * @description:
 */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/logo.png';
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import {filterProducts, removeCurrentUser, setLoading, setProducts} from "../redux/appSlice.tsx";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import type {ChangeEvent} from "react";
import type { ProductType } from '../types/Types.tsx';
import productService from "../services/ProductService.ts";
import {FaShoppingBasket} from "react-icons/fa";
import Badge from '@mui/material/Badge';


function NavBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(removeCurrentUser());
        navigate("/login");
        toast.info("Çıkış yaptınız.");
    }
    
    const handleFilter = async (e: ChangeEvent<HTMLInputElement>) => {
        try {
            if (e.target.value) {
                console.log(e.target.value)
                dispatch(filterProducts(e.target.value));
            } else {
                const products: ProductType[] = await productService.getAllProducts();
                dispatch(setProducts(products));
            }
        } catch (e) {
            toast.error("An error occurred while filtering products.");
        }

    }


    return (
        <AppBar position="static">
            <Toolbar variant="dense" sx={{justifyContent: "space-between"}}>
                <div style={{justifyContent: "flex-start", display: "flex", alignItems: "center"}}>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}
                                onClick={() => navigate('/')}>
                        <img src={logo} alt="Logo" style={{width: '40px', height: '40px'}}/>
                    </IconButton>
                    <Typography sx={{cursor: "pointer"}} variant="h6" color="inherit" component="div"
                                onClick={() => navigate('/')}>
                        E Ticaret
                    </Typography>
                </div>
                <div>
                    <TextField
                        id="username"
                        placeholder="Ara"
                        type={"text"}
                        className={"text-field"}
                        onChange={(e: ChangeEvent<HTMLInputElement>): void => handleFilter(e)}
                        sx={{
                            width: "300px",
                            color: "lightgrey",
                            borderBottom: "1px solid lightgrey"
                        }}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon sx={{color: "white"}}/>
                                    </InputAdornment>
                                )
                            },
                        }}
                        variant="standard"
                    />
                    <Badge badgeContent={4} color={"warning"} sx={{ margin: "0px 10px", cursor: "pointer"}}>
                        <FaShoppingBasket style={{fontSize: "20px"}}/>
                    </Badge>

                    <Button onClick={logout} sx={{textTransform: "none"}} color={"inherit"}>Çıkış Yap</Button>
                </div>


            </Toolbar>
        </AppBar>
    )
}

export default NavBar
