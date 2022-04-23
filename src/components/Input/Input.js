import { TextField } from "@mui/material";
import React from "react";

const styles = { 
    width: "464px",
    
    };

export default function Input({label,value}){

    return(
        <TextField
        sx={styles}          
        label={label}
        variant="outlined"
        value={value}         
    />
);
}