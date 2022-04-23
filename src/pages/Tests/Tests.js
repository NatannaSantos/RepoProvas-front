import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import SearchHeader from "../../components/SearchHeader/SearchHeader";


export default function Tests(){
    const [isTests,setIsTests]=useState(false);

    useEffect(()=>{
        setIsTests(true)
    }
    )
    return(
        <>
        <Header isTests={isTests}></Header>
        <SearchHeader></SearchHeader>
        <Divider></Divider>
        </>
    );
}