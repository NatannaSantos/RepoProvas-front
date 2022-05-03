import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BoxButtonsTests } from "../../components/BoxButtonsTests/BoxButtonsTests";
import { DividerTests } from "../../components/DividerTest/DividerTest";
import Header from "../../components/Header/Header";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import api from '../../services/api';
import useAuth from "../../hooks/useAuth";


export default function CreateTest() {
    const [isTests, setIsTests] = useState(false);
    const [select, setSelect] = useState("");
    const [categories, setCategories] = useState([]);
    const [disciplineData, setDisciplineData] = useState([]);
    const [testData, setTestData] = useState({ name: '', pdfUrl: '', categoryId: '', discipline: '', teacher: '' });
    const { auth } = useAuth();

    useEffect(() => {
        const discipline = api.getDisciplines(auth.token)
        discipline.then((response) => {
            setDisciplineData(response.data)
        })
        discipline.catch((error) => {
            console.log(error);
        })
        const categories = api.getCategories(auth.token);
        categories.then((response) => {
            setIsTests(true);
            setSelect("Adicionar");
            console.log("response", response.data);
            setCategories(response.data);
        })
        categories.catch((error) => {
            console.log(error);
        })
    }, []);

    const styleTypography = {
        fontSize: "24px",
        color: "#323232"
    }
    const styleForm = {
        display: "flex",
        flexDirection: "column",
        gap: "10px"
    }
    const styleInput = {
        width: "464px"
    }
    const styleButtom = {
        width: "464px"
    }


    const handleChange = (event) => {
        setTestData(event.target.value);
    };

    console.log("categories", categories);

   function handleTeacherByDisciline(name){
    console.log("name",name)
   }


    return (
        <>
            <Header isTests={isTests} />
            <Typography sx={styleTypography}>Adicione uma prova</Typography>
            <DividerTests />
            <BoxButtonsTests select={select} />
            <Box
                component="form"
                autoComplete="off"
                sx={styleForm}
            >
                <TextField
                    label="Título da prova"
                    value={testData.name}
                    sx={styleInput}
                >
                    <Typography>Título da prova</Typography>
                </TextField>
                <TextField
                    label="PDF da prova"
                    value={testData.pdfUrl}
                    sx={styleInput}
                >
                    <Typography>PDF da prova</Typography>
                </TextField>

                <TextField
                    id="outlined-select-currency"
                    select
                    label="Categoria"
                    value={categories.name}
                    onChange={handleChange}
                    sx={styleInput}

                >

                    {categories.map((option) => (
                        <MenuItem key={option.id} value={option.name}>
                            {console.log("option", option)}
                            {option.name}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Disciplina"
                    value={disciplineData.name}
                    onChange={handleChange}
                    sx={styleInput}

                >
                    {disciplineData.map((option) => (
                        <MenuItem key={option.id} value={option.name}>
                            {option.name} 
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Pessoa instrutora"
                    value={testData.teacher}
                    onChange={handleChange}
                    sx={styleInput}

                >
                    {categories.map((option) => (
                        <MenuItem key={option.id} value={option.name}>
                            {console.log("option", option)}
                            {option.name}
                        </MenuItem>
                    ))}
                </TextField>
                <Button variant='contained' sx={styleButtom}>Enviar</Button>


            </Box>

        </>
    );
}