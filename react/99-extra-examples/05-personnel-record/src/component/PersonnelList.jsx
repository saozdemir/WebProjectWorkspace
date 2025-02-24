import React, {useEffect, useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useSelector} from "react-redux";

function PersonnelList() {

    const personnelList = useSelector((state) => state.personnel.personnelList);

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label={"simple table"}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Adı</TableCell>
                            <TableCell align="left">Soyadı</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            personnelList && personnelList.map((person, index) => (
                                <TableRow key={index}>
                                    <TableCell align="left">{person.name}</TableCell>
                                    <TableCell align="left">{person.surname}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default PersonnelList
