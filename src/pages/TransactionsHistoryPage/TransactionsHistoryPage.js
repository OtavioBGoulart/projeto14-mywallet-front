import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AuthContext from "../../contexts/authContext";
import logoutImage from "../../assets/images/Logout.png";
import { useNavigate } from "react-router-dom";

export default function TransactionsPage() {

    const { token, setToken, userName, setUserName} = useContext(AuthContext);
    
    
    const navigate = useNavigate();
    console.log(token);
    console.log(userName);
    //const [transactions, setTransactions] = useState([]);

    // useEffect( () => {
    //     const URL = "http://localhost:5000/history";

    //     try { 
            
    //     } catch {

    //     }
    // })

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
                    <img src={logoutImage} alt="Logout"  />
                </LogoutImage>
            </TopContainer>
            {/* <TransactionsContainer>

            </TransactionsContainer> */}

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