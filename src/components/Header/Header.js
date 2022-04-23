
import {StyleHeader,Image} from "./style";
import logo from "../../assets/logo.png";
import { useState } from "react";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const style={
    width:"32px",
    height:"36px"
}

function Header({isTests}){
    console.log("isTests",isTests)    
    const[search,setSearch]=useState()
    return(       
        <StyleHeader isTests={isTests}>
            <Image src={logo} alt="RepoProvas"/>
            {isTests && <ExitToAppIcon sx={style}/>}
        </StyleHeader> 
    )}

export default Header;