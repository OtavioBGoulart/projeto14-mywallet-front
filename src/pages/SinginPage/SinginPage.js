import { Link } from "react-router-dom"
import styled from "styled-components"
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../contexts/authContext";


export default function SinginPage() {
    const { token, userName, setToken, setUserName } = useContext(AuthContext);
    const [form, setForm] = useState({ email: "", password: "" });
    const URL = "http://localhost:5000/sing-in"

    const navigate = useNavigate();

    useEffect(() => {
        if (token && userName) {
          navigate("/transactions");
        }
      });

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
            const promise = await axios.post(URL, body);
            console.log(promise.data.token);
            setToken(promise.data.token);
            setUserName(promise.data.userName);
            localStorage.setItem("token", JSON.stringify(promise.data.token));
            localStorage.setItem("userName", JSON.stringify(promise.data.userName));
            navigate("/transactions");
        } catch (error) {
            console.log(error);
            alert("email e/ou senha incorretos")
        }

    }
    return (
        <>
            <Logo>
                <h1>MyWallet</h1>
            </Logo>
            <FormLogin>
                <form onSubmit={sendRegistration}>
                    <InputLoginSession>
                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleForm}
                            placeholder="E-mail"
                            required>
                        </input>
                    </InputLoginSession>
                    <InputLoginSession>
                        <input
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleForm}
                            placeholder="Senha"
                            required>
                        </input>
                    </InputLoginSession>
                    <LoginButton>
                        <button type="submit">Entrar</button>
                    </LoginButton>
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
const LoginButton = styled.div`
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
        &:hover {
            cursor: pointer;
        }
    }
`