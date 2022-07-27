import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../globalStyles";
import PaginaPrincipal from "./PaginaInicial";


function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PaginaPrincipal />} />
                </Routes>
            </BrowserRouter>
        </>

    )
}

export default App;