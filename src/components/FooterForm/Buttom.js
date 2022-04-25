import { Button } from "@mui/material";

const style={
    fontWeight:"medium",
    fontSize:"14px"
}

export default function Buttom({type,children}){
    return(
        <Button type={type} variant='contained' sx={style}>{children}</Button>
    );
}