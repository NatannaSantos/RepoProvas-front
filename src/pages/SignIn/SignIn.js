import { useEffect, useState } from "react";
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
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";


function SignIn() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { auth, login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth && auth.token) {
            navigate("/tests");
        }
    }, [])

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const user = { ...formData };
        console.log("userLogin",user);
        try {
            const {data} = await api.login(user);
            login(data);
            navigate('/tests');
        } catch (error) {
            console.log(error);
            alert("Erro, tente novamente");
        }
    }
   

    return (
        <>
            <Header></Header>
            <Title>Login</Title>
            <ButtonGit>Entrar com gitHub</ButtonGit>
            <DividerOr />
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
                <FooterForm>
                    <LinkFooter to="/signUp">Não possuo cadastro</LinkFooter>
                    <Buttom type="submit">Entrar</Buttom>
                </FooterForm>
            </Form>
        </>
    );
}
export default SignIn;