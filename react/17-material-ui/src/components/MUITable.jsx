import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function MUITable() {
    const rows = [
        {id:1, firstName:"Ahmet", lastName:"Özdemir", age: 33},
        {id:2, firstName:"Emir", lastName:"Özdemir", age: 2},
        {id:3, firstName:"Esra", lastName:"Özdemir", age: 27},
    ]

    return (
        <Table stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Age</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, index) => (
                    <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.firstName}</TableCell>
                        <TableCell>{row.lastName}</TableCell>
                        <TableCell>{row.age}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default MUITable
