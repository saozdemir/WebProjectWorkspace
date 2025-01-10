import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {itemData} from "../data/ImageList.jsx"

function MUIImageList() {
    return (
        <div>
            <ImageList variant="woven" cols={3} rowHeight={250} sx={{width: "700px", height: "500px"}}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} loading={"lazy"}>
                        <img
                            src={item.img}
                        />
                        <ImageListItemBar title={item.title}></ImageListItemBar>
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}

export default MUIImageList
