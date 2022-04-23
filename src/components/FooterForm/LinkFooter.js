import { Link } from "@mui/material";

const style={
    color:"#4673CACC",
    fontSize:"12px",
    fontWeight:"medium"
}
export default function LinkFooter({to,children}){
    console.log("childrenLink",children)
    console.log("to",to)    
    const link = `"${to}"`
    console.log(link)

     return(
     <Link href={to} sx={style}>{children}</Link>
    );
}