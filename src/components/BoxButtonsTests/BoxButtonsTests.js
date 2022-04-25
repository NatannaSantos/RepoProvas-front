import { Box, Button } from "@mui/material";
import React from "react";

const style={
    width:"464px",    
    display:"flex",
    justifyContent:"space-between",
    marginTop:"25px"
}
export function BoxButtonsTests(){
    return(
        <Box sx={style}>
            <Button variant="contained">Disciplinas</Button>
            <Button variant="contained">Pessoa instrutora</Button>
            <Button variant="contained">Adicionar</Button>
        </Box>
    );
}