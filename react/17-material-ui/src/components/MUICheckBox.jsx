import React, {useState} from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import FormControl from "@mui/material/FormControl";
import {Button, FormLabel} from "@mui/material";

function MUICheckBox() {
    const [isConfirm, setIsConfirm] = useState(false);
    console.log(isConfirm);

    const submit = () => {
        if (isConfirm) {
            alert("Gönderildi")
        } else {
            alert("Kullanım koşullarını onaylayınız.")
        }
    }
    return (
        <div>
            <div>
                <FormControl>
                    <FormLabel>Eğitim Durumu</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked={true} disabled={true}/>}
                                          label="İlkokul"
                                          value="1"
                                          labelPlacement="end">
                        </FormControlLabel>
                        <FormControlLabel control={<Checkbox/>}
                                          label="Lise"
                                          value="2"
                                          labelPlacement="end">
                        </FormControlLabel>
                        <FormControlLabel control={<Checkbox/>}
                                          label="Ön Lisans"
                                          value="3"
                                          labelPlacement="end">
                        </FormControlLabel>
                        <FormControlLabel control={<Checkbox/>}
                                          label="Lisans"
                                          value="4"
                                          labelPlacement="end">
                        </FormControlLabel>
                        <FormControlLabel control={<Checkbox/>}
                                          label="Yüksek Lisans"
                                          value="5"
                                          labelPlacement="end">
                        </FormControlLabel>
                    </FormGroup>
                </FormControl>
            </div>
            {/* Form kontrolü kullanımı*/}
            <div>
                <FormControl sx={{border: "1px solid lightgrey", width: "500px", padding: "5px"}}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={isConfirm} onChange={(e) => setIsConfirm(e.target.checked)}/>}
                            label="Kullanım koşullarını kabul ediyorum."
                            value="signed"
                            labelPlacement="end">
                        </FormControlLabel>
                    </FormGroup>
                    <Button variant="contained" onClick={submit}>Gönder</Button>
                </FormControl>
            </div>

        </div>
    )
}

export default MUICheckBox
