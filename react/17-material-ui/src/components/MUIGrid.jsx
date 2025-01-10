import React from 'react'
import Grid from '@mui/material/Grid2';

// import Grid from "@mui/material/Grid"

function MUIGrid() {
    //! Responsive tasarım yapımına olanak tanır.
    //! Telefonda farklı görünsün masaüstü farklı görünsün gibi
    //! Bootstrapdaki gibi 12 parçaya böler
    return (
        <div>
            {/* Grid container olarak işaretlenirse bir satır olur ve sonraki gridler responsive özellikleri kullanarak yazılır*/}
            <Grid container spacing={2}>
                <Grid size={{xs: 12, md: 4, lg: 6}} sx={{border: "1px solid lightgray"}}>
                    <div>xs=12 md=4 lg=6</div>
                </Grid>
                <Grid size={{xs: 12, md: 4, lg: 3}} sx={{border: "1px solid lightgray"}}>
                    <div>xs=12 md=4 lg=3</div>
                </Grid>
                <Grid size={{xs: 12, md: 4, lg: 3}} sx={{border: "1px solid lightgray"}}>
                    <div>xs=12 md=4 lg=3</div>
                </Grid>
            </Grid>
        </div>
    )
}

export default MUIGrid
