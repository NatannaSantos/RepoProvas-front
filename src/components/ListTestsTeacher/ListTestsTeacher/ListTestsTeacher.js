import { useState } from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListTestTeacher from "../ListTestTeacher/ListTestTeacher";


export default function ListTestsTeacher({ termName, termDisciplines }) {
  const [open, setOpen] = useState(false);
 


  console.log("termDisciplines", termDisciplines);
  

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 464, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={() => handleClick()}>
        <ListItemText primary={termName} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {termDisciplines.map((discipline) => (
                <ListTestTeacher open={open} discipline={discipline} />                 
          
        ))}
      </Collapse>

    </List>
  );
}