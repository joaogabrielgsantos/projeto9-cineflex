import { useParams } from "react-router-dom"
import { PageTitle } from "./PaginaFilmes"
import Rodape from "./Rodape"
import { TelaComFooter } from "./SessoesFilme"
import styled from "styled-components"


function AssentosSessao() {
    const { idSessao } = useParams()
    console.log(idSessao)

    return (
        <>
            <TelaComFooter>
                <PageTitle>Selecione o(s) assento(s)</PageTitle>
                <ListaAssentos>

                </ListaAssentos>
            </TelaComFooter>
            <Rodape />


        </>
    )
}

export default AssentosSessao;


const ListaAssentos = styled.div`
width: 100%;
display: flex;
background-color: red;
`;