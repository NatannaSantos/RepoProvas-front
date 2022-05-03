import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ListTestByDiscipline({ discipline }) {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);


    const handleClick = () => {
        setOpen(!open);
        console.log("disciplineId", discipline.id);
    };

    const styleTypography = {
        color: "#8D8D8D"
    }

    console.log("discipline", discipline);

    return (
        <List component="div" disablePadding onClick={()=>console.log("apertei")}>
            <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={discipline.name} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>

                {discipline.teacherDiscipline.map((discipline) => (
                    discipline.test.map((unic) => (
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 6 }}>
                                <ListItemText>{unic.category.name}
                                    <Typography sx={styleTypography} variant="body2">{unic.name}-{discipline.teacher.name}</Typography>
                                </ListItemText>
                            </ListItemButton>
                        </List>
                    ))
                ))}

            </Collapse>
        </List>
    );
}