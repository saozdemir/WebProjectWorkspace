import React, {useState} from 'react'
import {Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {savePersonnel} from "../redux/personnelSlice.jsx";

function PersonnelRecord() {
    const [personnel, setPersonnel] = useState({name: "", surname: ""});
    const dispatch = useDispatch();

    const save = () => {
        const newPersonnel = {
            name: personnel.name, surname: personnel.surname
        }
        console.log(newPersonnel)
        dispatch(savePersonnel(newPersonnel))
        //useDispatch(savePersonnel())
    }

    const search = () => {

    }

    return (<div className={"personnel-record"}>
        <div className={"personnel-record-row"}>
            <TextField id="outlined-basic" label="Adı" variant="outlined" onChange={(e) => {
                setPersonnel({...personnel, name: e.target.value})
            }}/>
        </div>
        <div className={"personnel-record-row"}>
            <TextField id="outlined-basic" label="Soyadı" variant="outlined" onChange={(e) => {
                setPersonnel({...personnel, surname: e.target.value})
            }}/>
        </div>
        <div className={"personnel-record-row"}>
            <Button variant="contained" color="primary" onClick={save}>Kaydet</Button>
        </div>
        <div className={"personnel-record-row"}>
            <Button variant="contained" color="secondary">Ara</Button>
        </div>

    </div>)
}

export default PersonnelRecord
