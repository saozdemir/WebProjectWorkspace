import React, {useState} from 'react';
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import {useSelector} from "react-redux";

function Loading(props) {
    //! Store product altında tanımlanan => loading state ini aldık.
    const {loading} = useSelector((store) => store.product);

    //? MUI Backdrop özelliği kullanıldı.
    return (
        <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open={loading}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}

export default Loading;