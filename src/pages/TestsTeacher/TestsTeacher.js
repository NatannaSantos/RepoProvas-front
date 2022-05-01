import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { BoxButtonsTests } from "../../components/BoxButtonsTests/BoxButtonsTests";
import { DividerTests } from "../../components/DividerTest/DividerTest";
import Header from "../../components/Header/Header";
import ListTestsTeacher from "../../components/ListTestsTeacher/ListTestsTeacher/ListTestsTeacher";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";



export default function TestsTeacher() {
    const [isTests, setIsTests] = useState(false);
    const { auth } = useAuth()
    const [terms, setTerms] = useState([]);
    const [select, setSelect] = useState("");
   
    useEffect(() => {
        const promise = api.getDisciplinesByTeacher(auth.token);
        promise.then(response => {
            setTerms(response.data);
            setIsTests(true)
            setSelect("Pessoa instrutora");
        })
        promise.catch(error => {
            console.log(error);
        })
    }, []);

    const stylesSearchBar={
        width:"464px"
    }

    
       console.log("termTeacher",terms)


return (
        <>
            <Header isTests={isTests}></Header>
            <TextField
                sx={stylesSearchBar}
                variant="outlined"
                placeholder="Pesquise por pessoa instrutora"
            />
            <DividerTests />
            <BoxButtonsTests select={select}/>
             {terms.map((term)=>(
                <ListTestsTeacher termName={term.name} termDisciplines={term.teacherDisciplines} />
            ))} 
            
        </>
    );
}