import { Box } from "@mui/material";

const styleBox={
    width: "464px",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between"

}

export default function FooterForm({children}){
    return(
        <Box sx={styleBox}>
            {children}
        </Box>
    );
}