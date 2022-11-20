import GlobalStyle from "./assets/css/GlobalStyle";
import SinginPage from "./pages/SinginPage/SinginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {

    return (
        <BrowserRouter>
            <GlobalStyle />
                <Routes>
                    <Route path="/" element={<SinginPage />} />
                    {/* <Route path="/sing-up" element={<SingupPage />} />
                    <Route path="/transactions/:act" element={<TransactionsPage setReserva={setReserva}/>} /> */}
                </Routes>
        </BrowserRouter>
    )
}