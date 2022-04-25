import { useEffect, useState } from "react";
import { BoxButtonsTests } from "../../components/BoxButtonsTests/BoxButtonsTests";
import { DividerTests } from "../../components/DividerTest/DividerTest";
import Header from "../../components/Header/Header";
import ListTests from "../../components/ListTests/ListTests";
import SearchHeader from "../../components/SearchHeader/SearchHeader";


export default function Tests() {
    const [isTests, setIsTests] = useState(false);

    useEffect(() => {
        setIsTests(true)
    }
    )
    return (
        <>
            <Header isTests={isTests}></Header>
            <SearchHeader/>
            <DividerTests/>
            <BoxButtonsTests/>
            <ListTests/>
        </>
    );
}