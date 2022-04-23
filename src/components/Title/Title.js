import { Box } from "@mui/material";

const styleTitle={
    fontWeight:"medium",
    fontSize: "24px",
    marginTop:"100px"
}

export default function Title({children}){
    return(
        <Box sx={styleTitle}>{children}</Box>
    );
}