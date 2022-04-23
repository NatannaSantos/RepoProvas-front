import { Divider } from "@mui/material";

const styleDivider={
    color:"#000000CC",
    fontWeight: "bold",
    width: "464px",
    fontSize: "12px",  
    marginBottom:"29px"  
}

export default function DividerOr(){
    return(
       <Divider sx={styleDivider}>ou</Divider>
    );
}