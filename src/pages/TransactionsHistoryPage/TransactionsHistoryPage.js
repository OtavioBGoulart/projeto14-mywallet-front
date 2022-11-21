import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AuthContext from "../../contexts/authContext";
import logoutImage from "../../assets/images/Logout.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ListTransactions from "../../components/ListTransactions";

export default function TransactionsPage() {

    const { token, setToken, userName, setUserName } = useContext(AuthContext);


    const navigate = useNavigate();
    console.log(token);
    console.log(userName);
    const [transactions, setTransactions] = useState(false);

    useEffect( () => {
        const URL = "http://localhost:5000/history";
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        
        const promise = axios.get(URL, config);

        promise.then((res) => {
            console.log(res.data.transactions);
            const list = res.data.transactions
            
            if (list.length !== 0) {
                setTransactions(list)
                console.log(list)
            }
        })
        
    }, [token])

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        setToken("");
        setUserName("");
        navigate("/");
    }


    return (
        <>
            <TopContainer>
                <Name><h1>Olá,    {userName}</h1></Name>
                <LogoutImage onClick={logout}>
                    <img src={logoutImage} alt="Logout" />
                </LogoutImage>
            </TopContainer>
            <TransactionsContainer>
                {transactions ? (
                    transactions.map((t) => <ListTransactions key={t._id} transaction={t}/>)
                ) : (<h1>Não há registros de entrada ou saída</h1>)}
                
            </TransactionsContainer>

        </>
    )
}

const TopContainer = styled.div`
    width: 80vw;
    margin: 25px auto;
    display: flex;
    justify-content: space-between;

`

const Name = styled.div`
    h1 {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
    }
`

const LogoutImage = styled.div`
    width: 25px;
    height: 25px;
    img {
        width: 100%;
        height: 100%;
    }
`
const TransactionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    height: 446px;
    margin: 20px auto;
    padding-top: 15px;
    background: #FFFFFF;
    border-radius: 5px;
    h1 {
    margin-top: 45%;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
    }
`
// const Empty = styled.h1`
//     font-family: 'Raleway';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 20px;
//     line-height: 23px;
//     text-align: center;
//     color: #868686;
//`