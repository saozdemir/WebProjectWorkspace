import React, {useState} from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CustomTabPanel from "./CustomTabPanel.jsx";

function MUITabs() {
    const [value, setValue] = useState(0);

    //* Tablara basıldığında newValue o tabın değerini gösterir
    const handleChange = (event, newValue) => {
        // console.log("newValue " + newValue);
        setValue(newValue);
    }



    return (
        <div>
            <Box sx={{width: '100%'}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Kişisel Bilgiler"/>
                        <Tab label="Eğitim Bilgileri"/>
                        <Tab label="İletişim"/>
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <div>Seyit Ahmet Özdemir</div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <div>Yüksek Lisans</div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <div>saozdemir</div>
                </CustomTabPanel>
            </Box>
        </div>
    )
}

export default MUITabs
