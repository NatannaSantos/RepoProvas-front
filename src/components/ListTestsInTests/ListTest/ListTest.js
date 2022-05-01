import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useState } from "react";


export default function ListTest({ discipline }) {
    const [open, setOpen] = useState(false);
       

    const handleClick = () => {
        setOpen(!open);
        console.log("disciplineId", discipline.id);
    };

    const styleTypography={
        color:"#8D8D8D"
    }
    
    console.log("discipline",discipline);
    return (
        <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleClick()}>
                <ListItemText primary={discipline.name} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>

                {discipline.teacherDiscipline.map((discipline) => (
                    discipline.test.map((unic) => (                    
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 6 }}>                                
                                <ListItemText>{unic.category.name}
                                <Typography  sx={styleTypography} variant="body2">{unic.name}-{discipline.teacher.name}</Typography>
                                </ListItemText>
                            </ListItemButton>
                        </List>
                    ))
                ))}

            </Collapse>
        </List>
    );
}