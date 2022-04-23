import Button from '@mui/material/Button';
import React from 'react';

const StyleButton={
    backgroundColor: "#424445",
    width: 464,
    height:36,
    marginTop:"29px",
    marginBottom:"29px",
    fontWeight:"medium"
}

export default function ButtonGit({children}){
    console.log({children});
    return(
        <Button variant="contained" sx={StyleButton}>{children}</Button>
    )    
}