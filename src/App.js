import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinginPage from "./pages/SinginPage/SinginPage";
import SingupPage from "./pages/SingupPage/SingupPage";
import TransactionsPage from "./pages/TransactionsHistoryPage/TransactionsHistoryPage";
import AuthContext from "./contexts/authContext";
import { useState } from "react";



export default function App() {

    const [token, setToken] = useState("");

    return (

        <AuthContext.Provider value = {{token, setToken}}>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<SinginPage />} />
                    <Route path="/sing-up" element={<SingupPage />} />
                    <Route path="/transactions" element={<TransactionsPage />} />
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}