import { Link } from "react-router-dom"
import styled from "styled-components"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function SinginPage() {

    const [form, setForm] = useState({ email: "", password: "" });

    const navigate = useNavigate();

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    function sendRegistration(e) {
        e.preventDefault();

        const body = {
            ...form
        }

        console.log(body);

        const promise = axios.post("http://localhost:5000/sing-in", body)

        promise.then(() => {
            navigate("/transactions")
        })

        promise.catch(() => alert("Senha e/ou email incorretos. Tente novamente!"))
    }


    return (
        <>
            <Logo>
                <h1>MyWallet</h1>
            </Logo>np
            <FormLogin>
                <form onSubmit={sendRegistration}>
                    <InputLoginSession>
                        <input
                            name="email"
                            type="text"
                            value={form.email}
                            onChange={handleForm}
                            placeholder="E-mail"
                            required>
                        </input>
                    </InputLoginSession>
                    <InputLoginSession>
                        <input
                            name="password"
                            type="text"
                            value={form.password}
                            onChange={handleForm}
                            placeholder="Senha"
                            required>
                        </input>
                    </InputLoginSession>
                    <BotaoLogin>
                        <button type="submit">Entrar</button>
                    </BotaoLogin>
                </form>
            </FormLogin>
            <Singup>
                <Link to={"/sing-up"}>
                    <h1>Primeira vez? Cadastre-se!</h1>
                </Link>
            </Singup>
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
const FormLogin = styled.div`
width: 80vw;
margin: 40px auto 0 auto;
display: flex;
flex-direction: column;
`

const InputLoginSession = styled.div`
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
const BotaoLogin = styled.div`
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
const Singup = styled.div`
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
        text-decoration-line: underline;
        &:hover {
            cursor: pointer;
        }
    }
`