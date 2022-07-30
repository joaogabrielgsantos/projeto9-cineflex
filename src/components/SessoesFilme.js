import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import styled from "styled-components"
import { PageTitle } from "./PaginaFilmes"
import Rodape from "./Rodape"
import axios from "axios"



function Session({ weekday, date, showtimes }) {

    function exibirHorarios() {
        return (
            showtimes.map((item, index) =>
                <Link key={index} to={`/assentos/${item.id}`}>
                    <BoxHour>{item.name}</BoxHour>
                </Link>)
        )
    }


    return (
        <SessionWrap>
            <h2>{weekday} - {date}</h2>
            <HorariosWrap>
                {exibirHorarios()}
            </HorariosWrap>
        </SessionWrap>
    )
}



function SessoesFilme() {
    const { idFilme } = useParams()
    console.log(idFilme)


    const [sessoes, setSessoes] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);

        promise.then(response => {
            const { data } = response
            setSessoes(data)

        })

    }, []);

    function exibirSessoes() {
        if (sessoes.length === 0) {
            return (
                <h4>Carregando...</h4>
            )
        } else {
            return (
                sessoes.days.map((item, index) =>
                    <Session key={index} weekday={item.weekday} date={item.date} idSessao={item.id} showtimes={item.showtimes} />)
            )
        }
    }




    return (
        <>
            <TelaComFooter>
                <PageTitle>Selecione o horário</PageTitle>
                <ListaSessions>
                    {exibirSessoes()}
                </ListaSessions>
            </TelaComFooter>
            <Rodape />
        </>

    )
}

export default SessoesFilme;



const TelaComFooter = styled.div`
height: 100%;
padding: 67px 0px 117px 0px;

`;

const ListaSessions = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const SessionWrap = styled.div`
display: flex;
flex-direction: column;
margin-left: 15px;
h2{
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;
    color: #293845; 
}
`;

const HorariosWrap = styled.div`
display: flex;
margin-top: 20px;
margin-bottom: 25px;
width: 190px;
justify-content: space-between;
`;

const BoxHour = styled.h3`
width: 83px;
height: 43px;
background-color: #E8833A;
border-radius: 3px;
display: flex;
align-items: center;
justify-content: center;
font-size: 18px;
line-height: 21px;
letter-spacing: 0.02em;
color: #FFFFFF;

`;


