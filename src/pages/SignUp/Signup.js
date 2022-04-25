import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonGit from "../../components/ButtonGitHub/ButtonGitHub";
import DividerOr from "../../components/Divider/Divider";
import Buttom from "../../components/FooterForm/Buttom";
import FooterForm from "../../components/FooterForm/FooterForm";
import LinkFooter from "../../components/FooterForm/LinkFooter";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import api from "../../services/api";


function SignUp() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
      });
      const navigate = useNavigate();

      function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    
      async function handleSubmit(e) {
        e.preventDefault();
        console.log("password",formData.password)
    
        if (formData.password !== formData.confirmPassword) {
          alert("Senha inválida");
          return;
        }
    
        const user = { ...formData };
        delete user.confirmPassword;
    
        try {
          await api.createUser(user);
          navigate('/');
        } catch (error) {
          console.log(error);
          alert("Erro, tente novamente");
        }
      }
    console.log("formData",formData);
   return (
        <>
            <Header></Header>
            <Title>Cadastro</Title>  
            <ButtonGit>Entrar com gitHub</ButtonGit>
            <DividerOr/> 
            <Form onSubmit={handleSubmit}>
                <Input
                type="email"
                label="Email"
                name="email"
                Value={formData.email}
                onChange={(e) => handleChange(e)}
                />
                 <Input
                type="password"
                label="Senha"
                name="password"
                Value={formData.password}
                onChange={(e) => handleChange(e)}
                />
                 <Input
                type="password"
                label="Confirme Sua Senha"
                name="confirmPassword"
                Value={formData.confirmPassword}
                onChange={(e) => handleChange(e)}
                />
               <FooterForm>
                   <LinkFooter to="/">Já possuo cadastro</LinkFooter>
                   <Buttom type="submit">Cadastrar</Buttom>
               </FooterForm>
                
            </Form>                     
        </>
    );
}
export default SignUp;