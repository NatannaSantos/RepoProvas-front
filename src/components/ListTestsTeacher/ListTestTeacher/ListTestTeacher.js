import {  List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";


export default function ListTestTeacher({ discipline }) {
    const [open, setOpen] = useState(false);
       

    const handleClick = () => {
        setOpen(!open);       
    };
   
    return (
        <List component="div" disablePadding>
            
               {discipline.test.map((disciplines)=>(
               <ListItemButton sx={{ pl: 4 }} onClick={() => handleClick()}>
               <ListItemText primary={disciplines.name +"-"+ disciplines.category.name} />
               </ListItemButton>
               ))} 
            
        </List>
    );
}