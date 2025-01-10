import React, {useState} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MUIAccordion() {
    const [expanded, setExpanded] = useState("" | false);
    const handleChange = (panel) => (event, expanded) => {
        setExpanded(expanded ? panel : false)
    }

    return (
        // Accordion componenti "expanded" propsunun true yada false olmasına göre açık kapalı olur.
        <div>
            <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>Bölüm 1</AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                    duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>Bölüm 2</AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                    duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>Bölüm 3</AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                    duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</AccordionDetails>
            </Accordion>
        </div>
    )
}

export default MUIAccordion
