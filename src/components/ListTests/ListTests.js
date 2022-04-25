import { useEffect, useState } from "react";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";

export default function ListTests() {
  const [open, setOpen] = useState(false);
  const { auth } = useAuth()
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    const promise = api.getDisciplinesByTerms(auth.token);
    promise.then(response => {
      setTerms(response.data);
    })
    promise.catch(error => {
      console.log(error);
    })
  }, [])

  const handleClick = () => {
    setOpen(!open);
  };

  console.log("terms", terms);
  return (
    <List
      sx={{ width: '100%', maxWidth: 464, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {terms.map((term) => (
        <>
          <ListItemButton onClick={()=>handleClick()}>
            <ListItemText primary={term.number} />            
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
          {term.discipline.map((discipline)=>(
              <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={discipline.name} />
              </ListItemButton>
            </List>
              ))}            
          </Collapse>
        </>

      ))}

    </List>
  );
}