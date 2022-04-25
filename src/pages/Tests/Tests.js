import { useEffect, useState } from "react";
import { BoxButtonsTests } from "../../components/BoxButtonsTests/BoxButtonsTests";
import { DividerTests } from "../../components/DividerTest/DividerTest";
import Header from "../../components/Header/Header";
import ListTests from "../../components/ListTestsInTests/ListTests/ListTests";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";



export default function Tests() {
    const [isTests, setIsTests] = useState(false);
    const { auth } = useAuth()
    const [terms, setTerms] = useState([]);
    const [select,setSelect] = useState("");

    useEffect(() => {
        const promise = api.getDisciplinesByTerms(auth.token);
        promise.then(response => {
            setTerms(response.data);
            setIsTests(true)
        })
        promise.catch(error => {
            console.log(error);
        })
    }, [])

return (
        <>
            <Header isTests={isTests}></Header>
            <SearchHeader select={select} />
            <DividerTests />
            <BoxButtonsTests select={select} setSelect={setSelect}/>
            {terms.map((term)=>(
                <ListTests termName={term.number} termDiscipline={term.discipline} select={select}/>
            ))}
            
        </>
    );
}