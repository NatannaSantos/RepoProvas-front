import { TextField } from "@mui/material";
import React from "react";

const styles={
    width:"464px"
}

export default function SearchHeader({select}){
    return(
        <TextField
        sx={styles}       
        variant="outlined"       
        placeholder={select==="Pessoa instrutora"? "Pesquise por pessoa instrutora":"Pesquise por disciplina"}        
    />
);
}