import styled from "styled-components"


export default function ListTransactions({ transaction }) {

    const transactionValue = Number(transaction.value).toFixed(2);

    return (
        <TransactionInfos>
            <ContainerEsq>
                <Day>{transaction.day}</Day>
                <Description>{transaction.description}</Description>
            </ContainerEsq>
            <Value>
                {transaction.type === "input" ? (
                    <GreenValue><p>{transactionValue}</p></GreenValue>
                ) : (
                    <RedValue><p>{transactionValue}</p></RedValue>
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
    width: 100%;
    position: relative;
`

const ContainerEsq = styled.div`
    display: flex;
    flex-direction: row;
`
const Day = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;
    margin-right: 10px;
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

const GreenValue = styled.div`
    p {
    color: #03AC00;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    }
`
const RedValue = styled.div`
    p {
    color: #C70000;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    }
    
`