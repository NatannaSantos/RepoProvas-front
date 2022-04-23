import { Button } from "@mui/material";

const style={
    fontWeight:"medium",
    fontSize:"14px"
}

export default function Buttom({children}){
    return(
        <Button variant='contained' sx={style}>{children}</Button>
    );
}