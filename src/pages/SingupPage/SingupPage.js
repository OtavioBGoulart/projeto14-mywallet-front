import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"

export default function SingupPage() {
    const URL = "http://localhost:5000/sing-up"
    const [form, setForm] = useState({ name: "", email: "", password: "", confirmedPass: "" });
    const navigate = useNavigate();

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    async function sendRegistration(e) {
        e.preventDefault();

        const body = {
            ...form
        }

        console.log(body);

        try {
            await axios.post(URL, body);
            navigate("/");
        } catch (error) {
            alert(error.response.data.message);
        }

    }



    return (
        <>
            <Logo>
                <h1>MyWallet</h1>
            </Logo>
            <FormRegistration>
                <form onSubmit={sendRegistration}>
                    <InputRegistrationsSession>
                        <input
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleForm}
                            placeholder="Nome"
                            required>
                        </input>
                    </InputRegistrationsSession>
                    <InputRegistrationsSession>
                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleForm}
                            placeholder="E-mail"
                            required>
                        </input>
                    </InputRegistrationsSession>
                    <InputRegistrationsSession>
                        <input
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleForm}
                            placeholder="Senha"
                            required>
                        </input>
                    </InputRegistrationsSession>
                    <InputRegistrationsSession>
                        <input
                            name="confirmedPass"
                            type="password"
                            value={form.confirmedPass}
                            onChange={handleForm}
                            placeholder="Confirme a senha"
                            required>
                        </input>
                    </InputRegistrationsSession>
                    <BotaoCadastro>
                        <button type="submit">Cadastrar</button>
                    </BotaoCadastro>
                </form>
            </FormRegistration>
            <Back>
                <Link to={"/"}>
                    <h1>Já tem uma conta? Entre agora!</h1>
                </Link>
            </Back>

        </>
    )
}

const Logo = styled.div`
    margin: 100px auto 100px; 
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
    font-family: 'Saira Stencil One';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
    }
`

const FormRegistration = styled.div`
width: 80vw;
margin: 40px auto 0 auto;
display: flex;
flex-direction: column;
`
const InputRegistrationsSession = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    input {
        width: 100%;
        height: 58px;
        padding-left: 10px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        ::placeholder {
            color: #000000;
        }
    }
`
const BotaoCadastro = styled.div`
    display: flex;
    justify-content: center;
        button {
            width: 100%;
            height: 46px;
            background: #A328D6;
            border-radius: 5px;
            margin-top: 2px;
            margin-bottom: 20px;
            border: none;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
        }
`
const Back = styled.div`
    margin: auto;
    margin-top: 15px;
    width: fit-content;
    h1 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        &:hover {
            cursor: pointer;
        }
    }
`

