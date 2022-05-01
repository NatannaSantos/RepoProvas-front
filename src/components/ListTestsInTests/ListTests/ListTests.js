import { useState } from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListTest from "../ListTest/ListTest";


export default function ListTests({termName,termDiscipline}) {
  const [open, setOpen] = useState(false); 
  

  

  const handleClick = () => {
    setOpen(!open);
  };
  
  return (
    <List
      sx={{ width: '100%', maxWidth: 464, bgcolor: 'background.paper',color:'#000000',fontWeight:'bold'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >     
          <ListItemButton onClick={()=>handleClick()}>
            <ListItemText primary={termName + " "+ "Período"}/>            
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
                {termDiscipline.map((discipline)=>(
                  <ListTest open={open} discipline={discipline}/>   
                ))}                 
          </Collapse>    

    </List>
  );
}