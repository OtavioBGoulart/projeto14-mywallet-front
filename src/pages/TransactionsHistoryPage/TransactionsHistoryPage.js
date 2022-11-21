import { useContext } from "react"
import AuthContext from "../../contexts/authContext"

export default function TransactionsPage() {
    
    const { token } = useContext(AuthContext);
    console.log(token);


    return (
        <div>{token}</div>
    )
}