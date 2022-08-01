import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../globalStyles";
import AssentosSessao from "./AssentosSessao";
import PaginaFilmes from "./PaginaFilmes";
import SessoesFilme from "./SessoesFilme";
import Sucesso from "./Sucesso";
import Topo from "./Topo";


function App() {
   
    const [cpfFinal, setCpfFinal] = useState("")
    

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
            <Topo/>
                <Routes>
                    <Route path="/" element={<PaginaFilmes />} />
                    <Route path="/sessoes/:idFilme" element={<SessoesFilme />} />
                    <Route path="/assentos/:idSessao" element={<AssentosSessao setCpfFinal={setCpfFinal}/>} />
                    <Route path="/sucesso" element={<Sucesso cpfFinal={cpfFinal}/>} />
                </Routes>  
            </BrowserRouter>
        </>

    )
}

export default App;