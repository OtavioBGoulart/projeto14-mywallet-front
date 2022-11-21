import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinginPage from "./pages/SinginPage/SinginPage";
import SingupPage from "./pages/SingupPage/SingupPage";
import TransactionsPage from "./pages/TransactionsHistoryPage/TransactionsHistoryPage";
//import AuthContext from "./contexts/authContext";
import { AuthProvider } from "./contexts/authContext";
//import { useState } from "react";



export default function App() {

    // const [token, setToken] = useState("");
    // const [userName, setUserName] = useState("");

    return (

        <AuthProvider>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<SinginPage />} />
                    <Route path="/sing-up" element={<SingupPage />} />
                    <Route path="/transactions" element={<TransactionsPage />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}