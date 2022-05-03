import { useEffect, useState } from "react";
import { BoxButtonsTests } from "../../components/BoxButtonsTests/BoxButtonsTests";
import { DividerTests } from "../../components/DividerTest/DividerTest";
import Header from "../../components/Header/Header";
import ListTestsByDisciplines from "../../components/ListDisciplines/ListTestsByDiscipline/ListTestsByDiscipline";
import useAuth from "../../hooks/useAuth";
import SearchBarDisciplines from "../../SearchBarDisciplines/SearchBarDisciplines";
import api from "../../services/api";



export default function TestsByDisciplines() {
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
        });
        promise.catch(error => {
            console.log(error);
        });
    }, [isTests]);
    
   
 
 
   

console.log("terms",terms);
console.log("select",select);
    return (
        <>
            <Header isTests={isTests}></Header>
            <SearchBarDisciplines />
            <DividerTests />
            <BoxButtonsTests select={select} />
            {terms.map((term) => (
                <ListTestsByDisciplines termName={term.number} termDiscipline={term.discipline} select={select} />
            ))}

        </>
    );
}