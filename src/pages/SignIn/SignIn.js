import { useState } from "react";
import ButtonGit from "../../components/ButtonGitHub/ButtonGitHub";
import DividerOr from "../../components/Divider/Divider";
import Buttom from "../../components/FooterForm/Buttom";
import FooterForm from "../../components/FooterForm/FooterForm";
import LinkFooter from "../../components/FooterForm/LinkFooter";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import { useNavigate } from "react-router-dom";


function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate();

    function handleSignUp(){
        navigate("/signUp")
    }

    return (
        <>
            <Header></Header>
            <Title>Login</Title>
            <ButtonGit>Entrar com gitHub</ButtonGit>
            <DividerOr />
            <Form>
                <Input
                    label="Email"
                    Value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    label="Senha"
                    Value={password}
                />
                <FooterForm>
                    <LinkFooter to="/signUp">Não possuo cadastro</LinkFooter>
                    <Buttom>Entrar</Buttom>
                </FooterForm>
            </Form>
        </>
    );
}
export default SignIn;