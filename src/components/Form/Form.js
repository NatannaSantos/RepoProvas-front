import { Box } from "@mui/material";
import React from "react";

const styles={
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
   }

export default function Form({onSubmit,children}){
    return(
        <Box onSubmit={onSubmit} component="form" sx={styles}>
            {children}
        </Box>
    );
}