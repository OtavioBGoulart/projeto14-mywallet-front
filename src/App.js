import GlobalStyle from "./assets/css/GlobalStyle"


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