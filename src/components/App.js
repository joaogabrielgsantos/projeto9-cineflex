import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../globalStyles";
import AssentosSessao from "./AssentosSessao";
import PaginaFilmes from "./PaginaFilmes";
import SessoesFilme from "./SessoesFilme";
import Sucesso from "./Sucesso";
import Topo from "./Topo";


function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
            <Topo/>
                <Routes>
                    <Route path="/" element={<PaginaFilmes />} />
                    <Route path="/sessoes/:idFilme" element={<SessoesFilme />} />
                    <Route path="/assentos/:idSessao" element={<AssentosSessao />} />
                    <Route path="/sucesso" element={<Sucesso />} />
                </Routes>  
            </BrowserRouter>
        </>

    )
}

export default App;