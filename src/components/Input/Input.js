import { TextField } from "@mui/material";
import React from "react";

const styles = { 
    width: "464px",
    
    };

export default function Input({type,label,name,value,onChange}){
    console.log("value",value)

    return(
        <TextField
        type={type}
        sx={styles}          
        label={label}
        name={name}
        variant="outlined"
        value={value} 
        onChange={onChange}        
        required
    />
);
}