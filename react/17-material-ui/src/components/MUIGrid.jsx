import React from 'react'
import Grid from '@mui/material/Grid2';

// import Grid from "@mui/material/Grid"

function MUIGrid() {
    //! Responsive tasarım yapımına olanak tanır.
    //! Telefonda farklı görünsün masaüstü farklı görünsün gibi
    //! Bootstrapdaki gibi 12 parçaya böler
    return (
        <div>
            <Grid container spacing={2}>
                <Grid size={{xs: 6, md: 8}} sx={{border: "1px solid lightgray"}}>
                    <div>xs=6 md=8</div>
                </Grid>
                <Grid size={{xs: 6, md: 4}} sx={{border: "1px solid lightgray"}}>
                    <div>xs=6 md=4</div>
                </Grid>
                <Grid size={{xs: 6, md: 4}} sx={{border: "1px solid lightgray"}}>
                    <div>xs=6 md=4</div>
                </Grid>
                <Grid size={{xs: 6, md: 8}} sx={{border: "1px solid lightgray"}}>
                    <div>xs=6 md=8</div>
                </Grid>
            </Grid>
        </div>
    )
}

export default MUIGrid
