import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const style={
    width:"464px",    
    display:"flex",
    justifyContent:"space-between",
    marginTop:"25px"
}
export function BoxButtonsTests({select,setSelect}){
    const navigate = useNavigate();
    
    function handleSelect(props){
        setSelect(props);
        navigate("/tests");
        
    }

    function handleSelectInstructor(props){
        setSelect(props);
        navigate("/tests/teacher");
    }
    return(
        <Box sx={style}>
            <Button onClick={()=>handleSelect("Disciplinas")} variant={select=== "Disciplinas"?"contained": "outlined"} >Disciplinas</Button>
            <Button onClick={()=>handleSelectInstructor("Pessoa instrutora")} variant={select=== "Pessoa instrutora"?"contained": "outlined"}>Pessoa instrutora</Button>
            <Button variant="outlined">Adicionar</Button>
        </Box>
    );
}