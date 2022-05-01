import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const style={
    width:"464px",    
    display:"flex",
    justifyContent:"space-between",
    marginTop:"25px",
    marginBottom:"25px"
}

export function BoxButtonsTests({select}){
    console.log("selectBottom",select);
  
    const navigate = useNavigate();
    
    function handleSelectDiscipline(){
        navigate("/tests");
        
    }

    function handleSelectInstructor(){
        navigate("/tests/teacher");
    }

    function handleCreateTest(){
        navigate("/tests/create");
    }
    return(
        <Box sx={style}>
            <Button variant={select=== "Disciplinas"? "contained": "outlined"} onClick={()=>handleSelectDiscipline()}  >Disciplinas</Button>
            <Button variant={select=== "Pessoa instrutora"?"contained": "outlined"} onClick={()=>handleSelectInstructor()} >Pessoa instrutora</Button>
            <Button variant={select === "Adicionar"?"contained":"outlined"} onClick={()=>handleCreateTest()}>Adicionar</Button>
        </Box>
    );
}