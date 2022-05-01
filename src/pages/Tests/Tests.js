import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { BoxButtonsTests } from "../../components/BoxButtonsTests/BoxButtonsTests";
import { DividerTests } from "../../components/DividerTest/DividerTest";
import Header from "../../components/Header/Header";
import ListTests from "../../components/ListTestsInTests/ListTests/ListTests";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";



export default function Tests() {
    const [isTests, setIsTests] = useState(false);
    const { auth } = useAuth()
    const [terms, setTerms] = useState([]);
    const [select, setSelect] = useState("");

    useEffect(() => {
        const promise = api.getDisciplinesByTerms(auth.token);
        promise.then(response => {
            setTerms(response.data);
            setIsTests(true)
            setSelect("Disciplinas")
        })
        promise.catch(error => {
            console.log(error);
        })
    }, []);

    const stylesSearchBar={
        width:"464px"
    }
console.log("terms",terms);
console.log("select",select);
    return (
        <>
            <Header isTests={isTests}></Header>
            <TextField
                sx={stylesSearchBar}
                variant="outlined"
                placeholder="Pesquise por Disciplina"
            />
            <DividerTests />
            <BoxButtonsTests select={select} />
            {terms.map((term) => (
                <ListTests termName={term.number} termDiscipline={term.discipline} select={select} />
            ))}

        </>
    );
}