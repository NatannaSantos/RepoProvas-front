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


function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
   return (
        <>
            <Header></Header>
            <Title>Cadastro</Title>  
            <ButtonGit>Entrar com gitHub</ButtonGit>
            <DividerOr/> 
            <Form>
                <Input
                label="Email"
                Value={email}
                />
                 <Input
                label="Senha"
                Value={password}
                />
                 <Input
                label="Confirme Sua Senha"
                Value={password}
                />
               <FooterForm>
                   <LinkFooter to="/">Já possuo cadastro</LinkFooter>
                   <Buttom>Cadastrar</Buttom>
               </FooterForm>
                
            </Form>                     
        </>
    );
}
export default SignUp;