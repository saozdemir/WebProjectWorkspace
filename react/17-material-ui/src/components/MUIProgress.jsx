import React, {useEffect} from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";

function MUIProgress() {
    //* color: renk
    //* size: boyut

    //*Linear >
    //* variant="determinate" bar akışını durdurur ve value içinde tanımlanan değer kadar doldurur.
    //* value: bar'ın %kaçının dolu olacağı

    const [progress, setProgress] = React.useState(0);
    const timer = setInterval(() => {

    })

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress ===100) {
                    return 0;
                }
                const pulseValue = Math.floor(Math.random() * 10);
                return Math.min(oldProgress + pulseValue, 100);
            })
        }, 500)
        return (() => clearInterval(timer));
    }, []);

    return (
        <div>
            {/* Renk ve Size*/}
            <Box sx={{display: "flex"}}>
                <CircularProgress color="secondary" size={50}/>
                <CircularProgress color="primary" size={50}/>
                <CircularProgress color="inherit" size={50}/>
            </Box>
            <br/>
            <Stack sx={{width: '100%', color: 'grey.500'}} spacing={2}>
                <LinearProgress color="secondary"/>
                <LinearProgress color="success"/>
                <LinearProgress color="inherit"/>
                <LinearProgress color="error" variant="determinate" value={15}/>
            </Stack>
            <br/>
            {/*Auto*/}
            <Stack sx={{width: '100%', color: 'grey.500'}} spacing={2}>
                <LinearProgress color="warning" variant="determinate" value={progress}/>
            </Stack>

        </div>
    )
}

export default MUIProgress
