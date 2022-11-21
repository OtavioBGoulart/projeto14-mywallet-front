import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useContext, useState } from "react";
import AuthContext from "../../contexts/authContext";

export default function ActionPage() {
    const { token } = useContext(AuthContext);
    const { act } = useParams();
    const [form, setForm] = useState({ type: act, value: "", description: "" });
    const URL = `http://localhost:5000/${act}`
    const actPt = act === "input" ? "Entrada" : "Saída"
    // teste

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

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        console.log(config);


        try {
            await axios.post(URL, body, config);
            navigate("/transactions");
        } catch (error) {
            console.log(error);
            alert("Descrição com máximo de 20 caracteres, contando os espaços");
        }

    }
    return (
        <>
            <TransactionType>
                <h1>Nova {actPt}</h1>
            </TransactionType>
            <FormTransactions>
                <form onSubmit={sendRegistration}>
                    <InputTransactionsSession>
                        <input
                            name="value"
                            type="text"
                            value={form.value}
                            onChange={handleForm}
                            placeholder="Valor"
                            required>
                        </input>
                    </InputTransactionsSession>
                    <InputTransactionsSession>
                        <input
                            name="description"
                            type="text"
                            value={form.description}
                            onChange={handleForm}
                            placeholder="Descrição"
                            required>
                        </input>
                    </InputTransactionsSession>
                    <TransactionButton>
                        <button type="submit">Salvar {actPt}</button>
                    </TransactionButton>
                </form>
            </FormTransactions>
        </>
    )
}



const TransactionType = styled.div`
    width: 80vw;
    margin: 40px auto 50px; 
    h1 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
`
const FormTransactions = styled.div`
width: 80vw;
margin: 40px auto 0 auto;
display: flex;
flex-direction: column;
`

const InputTransactionsSession = styled.div`
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
const TransactionButton = styled.div`
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
