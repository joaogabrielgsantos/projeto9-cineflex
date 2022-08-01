import styled from "styled-components";
import { Button } from "./ReservarAssento"
import { PageTitle } from "./PaginaFilmes"
import { Link } from "react-router-dom";



function Sucesso() {
    return (
        <TelaSucesso>
            <PageTitle sucesso={true}>Pedido feito com sucesso!</PageTitle>
            <Wrap>
                <h2>Filme e sessão</h2>
                <h3>Enola Holmes</h3>
                <h3>24/06/2021 15:00</h3>
            </Wrap>
            <Wrap>
                <h2>Ingressos</h2>
                <h3>Assento 15</h3>
                <h3>Assento 15</h3>
            </Wrap>
            <Wrap>
                <h2>Comprador</h2>
                <h3>Nome: João da Silva Sauro</h3>
                <h3>CPF: 123.456.789-10</h3>
            </Wrap>
            <Link to = {"/"}>
            <Button>Voltar pra Home</Button>
            </Link>
        </TelaSucesso>


    )
}

export default Sucesso;


const TelaSucesso = styled.div`
padding-top: 67px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

const Wrap = styled.div`
width: 100%;
height: 110px;
padding-left: 28px;
display: flex;
flex-direction: column;
justify-content: center;


h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
}
h3{
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
}
`;