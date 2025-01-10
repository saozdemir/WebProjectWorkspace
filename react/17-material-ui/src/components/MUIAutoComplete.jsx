import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {top100Films} from "../data/MovieList.jsx";

function MUIAutoComplete() {
       return (
        // Yukarıda tanımlanan dizi options'a verildi
        <div>
            <Autocomplete sx={{width: '350px'}} options={top100Films}
                          getOptionLabel={(option) => option.title}
                          renderInput={(params) => <TextField {...params} label="Filmler"/>}//{...params}
            >
            </Autocomplete>
        </div>
    );
}

export default MUIAutoComplete;