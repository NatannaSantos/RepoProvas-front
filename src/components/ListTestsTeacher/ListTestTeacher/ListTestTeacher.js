import {  Link, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import api from "../../../services/api";


export default function ListTestTeacher({ discipline }) {
    const [open, setOpen] = useState(false);
       

    const handleClick = () => {
        setOpen(!open);       
    };
    const styleTypography={
        color:"#8D8D8D"
    }
    async function handleCountViews(id){
        console.log("id",id)
        try{
         await api.countViews(id);
        }
        catch(error){
         console.log(error);
        }
        
     }
    console.log("discipline Teacher",discipline);

       
    return (
        <List component="div" disablePadding>
            
               {discipline.test.map((disciplines)=>(                  
               <ListItemButton sx={{ pl: 4 }} onClick={() => handleClick()}>
               <ListItemText>{disciplines.category.name}
                   {console.log("disciplineDentro",disciplines.category)}
               <Typography sx={styleTypography} variant="body2">{`${disciplines.name} (${discipline.discipline.name}) `}</Typography>
               <Link href={disciplines.pdfUrl} onClick={()=>handleCountViews(disciplines.id)}>{disciplines.pdfUrl}</Link>
               <Typography sx={styleTypography}>visualizações:{disciplines.viewsCount}</Typography>
               </ListItemText>
               </ListItemButton>
               ))} 
            
        </List>
    );
}