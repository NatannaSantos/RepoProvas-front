
import {StyleHeader,Image} from "./style";
import logo from "../../assets/logo.png";
import { useState } from "react";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from "react-router-dom";

const style={
    width:"32px",
    height:"36px"
}

function Header({isTests}){
    const navigate=useNavigate();
        

function handleLogout(){
    navigate("/");
    localStorage.clear();
    

}
    return(       
        <StyleHeader isTests={isTests}>
            <Image src={logo} alt="RepoProvas"/>
            {isTests && <ExitToAppIcon sx={style} onClick={()=>handleLogout()}/>}
        </StyleHeader> 
    )}

export default Header;