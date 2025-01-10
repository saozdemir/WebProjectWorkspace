import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Kaan from "../images/kaan.jpg"
import {Stack} from "@mui/material";

function MUICard() {
    return (
        <Stack direction="row">
            <Card sx={{width: 350, margin: 3}}>
                {/*Resim*/}
                <CardMedia
                    component="img"
                    alt="Kaan"
                    height="200"
                    image={Kaan}
                ></CardMedia>
                {/*Başlık ve Yazı*/}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        TFX KAAN
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card sx={{width: 350, margin: 3}}>
                {/*Resim*/}
                <CardMedia
                    component="img"
                    alt="Kaan"
                    height="200"
                    image={Kaan}
                ></CardMedia>
                {/*Başlık ve Yazı*/}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        TFX KAAN
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Stack>

    )
}

export default MUICard
