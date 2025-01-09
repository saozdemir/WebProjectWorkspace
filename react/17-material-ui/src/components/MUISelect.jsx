import React, {useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";


function MUISelect() {
    //! MUI Kütüphanesinde bir komponente sttyle tanımlaması yapılmak istendiğinde style değil sx props u kullanılır.
    const [currency, setCurrency] = useState("");
    const [languages, setLanguages] = useState([]);
    console.log(currency);
    console.log(languages)

    return (
        <div>
            <div style={{margin: "10px"}}>
                <FormControl sx={{width: "150px"}}>
                    <InputLabel>Para Birimi</InputLabel>
                    <Select size="small" value={currency} onChange={(e) => setCurrency(e.target.value)}>
                        {/*value seçildiğinde alınacak değere karşılık gelir.*/}
                        <MenuItem value="TRY">Türk Lirası</MenuItem>
                        <MenuItem value="EUR">Euro</MenuItem>
                        <MenuItem value="USD">Dolar</MenuItem>
                    </Select>
                </FormControl>
            </div>
            {/* Select componentini TextField ile kullanabiliriz. select eklenir*/}
            <div>
                <TextField sx={{width: "150px"}} select label="Para Birimi" value={currency}
                           onChange={(e) => setCurrency(e.target.value)}>
                    <MenuItem value="TRY">Türk Lirası</MenuItem>
                    <MenuItem value="EUR">Euro</MenuItem>
                    <MenuItem value="USD">Dolar</MenuItem>
                </TextField>
            </div>
            {/*Çoklu seçim SelectProps={{multiple: true} ile  yapılabilir. value değeri bir dizi olur*/}
            <div>
                <TextField sx={{width: "200px"}}
                           SelectProps={{multiple: true}}
                           select
                           label="Programlama Dili"
                           value={languages}
                           onChange={(e) => setLanguages(e.target.value)}>
                    <MenuItem value="JAVA">Java</MenuItem>
                    <MenuItem value="JAVASCRIPT">JavaScript</MenuItem>
                    <MenuItem value="CSHARP">C#</MenuItem>
                </TextField>
            </div>
        </div>
    )
}

export default MUISelect
