import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function MUIDialog() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const type = {
        YES:"YES",
        NO:"NO"
    }


    const result =(userResult)=> {
        if(userResult === type.YES){
            console.log("Onaylandı");
        } else {
            console.log("Reddedildi");
        }
        setDialogOpen(false);
    }

    return (
        <div>
            <Button onClick={()=>setDialogOpen(true)} >Dialog</Button>
            <Dialog open={dialogOpen} onClose={()=>setDialogOpen(false)}>
                <DialogTitle>Soru</DialogTitle>
                <DialogContent>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam e</DialogContent>
                <DialogActions>
                    <Button variant="contained" color="success" onClick={()=>result(type.YES)}>Onayla</Button>
                    <Button variant="contained" color="error" onClick={()=>result(type.NO)}>Reddet</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default MUIDialog
