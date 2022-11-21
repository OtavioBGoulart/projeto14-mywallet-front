import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AuthContext from "../../contexts/authContext";
import logoutImage from "../../assets/images/Logout.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ListTransactions from "../../components/ListTransactions";
//import circleIcon from "../../assets/images/Circle.png"
import outputIcon from "../../assets/images/Output.png"
import inputIcon from "../../assets/images/Input.png"
import { Link } from "react-router-dom";

export default function TransactionsPage() {

    const { token, setToken, userName, setUserName } = useContext(AuthContext);
    const [transactions, setTransactions] = useState(false);
    const [balance, setBalance] = useState("")
    const input = "input";
    const output = "output";
    const navigate = useNavigate();
    //console.log(token);
    //console.log(userName);


    useEffect(() => {
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
            const userBalance = res.data.balance

            if (list.length !== 0) {
                setTransactions(list);
                setBalance(userBalance.toFixed(2));
                console.log(list);
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

    // if (list === undefined) {
    //     return <div>Carregando</div>
    // }

    return (
        <>
            <TopContainer>
                <Name><h1>Olá,    {userName}</h1></Name>
                <LogoutImage onClick={logout}>
                    <img src={logoutImage} alt="Logout" />
                </LogoutImage>
            </TopContainer>
            <HistoryContainer>
                <TransactionsContainer>
                    {transactions ? (
                        transactions.map((t) => <ListTransactions key={t._id} transaction={t} />)
                    ) : (<h1>Não há registros de entrada ou saída</h1>)}
                </TransactionsContainer>
                <BalanceDiv>
                    {transactions ? (
                    <Balance>Saldo</Balance> ) : undefined }
                    {balance >= 0 ? (
                        <PositiveBalance><p>{balance}</p></PositiveBalance>
                    ) : (
                        <NegativeBalance><p>{balance}</p></NegativeBalance>
                    )}
                </BalanceDiv>
            </HistoryContainer>
            <TransactionsButtons>
                <Link to={`/trans/${input}`}>
                    <InputButton>
                        <img src={inputIcon} alt="Transaction input" />
                        <p>Nova Entrada</p>
                    </InputButton>
                </Link>

                <Link to={`/trans/${output}`}>
                    <OutputButton>
                        <img src={outputIcon} alt="Transaction output" />
                        <p>Nova Saída</p>
                    </OutputButton>
                </Link>
            </TransactionsButtons>


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
const HistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    height: 446px;
    margin: 20px auto;
    padding-top: 15px;
    background: #FFFFFF;
    border-radius: 5px;
    position: relative;
    
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
const TransactionsContainer = styled.div`
    height: 360px;
    width: 90%;
    overflow-y: scroll;
`
const BalanceDiv = styled.div`
    width: 90%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px auto;
    margin-top: 40px;
    position: absolute;
    bottom: 5px;
    z-index: 3;
`
const Balance = styled.h2`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
`
const PositiveBalance = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-align: right;
    color: #03AC00;
`
const NegativeBalance = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-align: right;
    color: #C70000;
`

const TransactionsButtons = styled.div`
    display: flex;
    width: 80vw;
    justify-content: space-between;
    margin: 0 auto;
`

const InputButton = styled.button`
    width: 35vw;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    border: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
    img {
        width: 15px;
        height: 15px;
    }
`
const OutputButton = styled.button`
    width: 35vw;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    border: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
    img {
        width: 15px;
        height: 5px;
        margin-top: 7px;
    }

`