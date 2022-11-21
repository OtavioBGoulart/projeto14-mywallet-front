import styled from "styled-components"


export default function ListTransactions ({ transaction }) {

    console.log(transaction.type)
    return (
        <TransactionInfos>
            <Day>{transaction.time}</Day>
            <Description>{transaction.description}</Description>
            <Value>
            {transaction.type === "input" ? (
                <GreenValue>{transaction.value}</GreenValue>
            ) : (
                <RedValue>{transaction.value}</RedValue>
            )}
            </Value>
        </TransactionInfos>
        
    )
}

const TransactionInfos = styled.div`
    display: flex;
    justify-content: space-between;
    /* background-color: #FFFFFF; */
    margin-bottom: 15px;
    width: 90%;
`
const Day = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;
`

const Description = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
`

const Value = styled.div`
    
`

const GreenValue = styled.h1`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: #03AC00;
`
const RedValue = styled.h1`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: #C70000;
`