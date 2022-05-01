import {  List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useState } from "react";


export default function ListTestTeacher({ discipline }) {
    const [open, setOpen] = useState(false);
       

    const handleClick = () => {
        setOpen(!open);       
    };
    const styleTypography={
        color:"#8D8D8D"
    }
    console.log("discipline",discipline);

       
    return (
        <List component="div" disablePadding>
            
               {discipline.test.map((disciplines)=>(                  
               <ListItemButton sx={{ pl: 4 }} onClick={() => handleClick()}>
               <ListItemText>{disciplines.category.name}
                   {console.log("disciplineDentro",disciplines.category)}
               <Typography sx={styleTypography} variant="body2">{`${disciplines.name} (${discipline.discipline.name}) `}</Typography>
               </ListItemText>
               </ListItemButton>
               ))} 
            
        </List>
    );
}