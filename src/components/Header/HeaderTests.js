
import {StyleHeader,Image} from "./style";
import logo from "../../assets/logo.png";
import SearchHeader from "../SearchHeader/SearchHeader";
import { useState } from "react";


function HeaderTests(){
    
    const[search,setSearch]=useState()
    return(       
        <StyleHeader>
            <Image src={logo} alt="RepoProvas"/>
            <SearchHeader
            label='Pesquise por disciplina'
            value={search}
            />
        </StyleHeader>        
        
    );
}

export default HeaderTests;