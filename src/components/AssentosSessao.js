import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PageTitle } from "./PaginaFilmes"
import Rodape from "./Rodape"
import { TelaComFooter } from "./SessoesFilme"
import styled from "styled-components"
import axios from "axios"
import ReservarAssento from "./ReservarAssento"



const colorSelecionado = "#8DD7CF";
const borderSelecionado = "#1AAE9E";
const colorDisponivel = "#C3CFD9";
const borderDisponivel = "#7B8B99";
const colorIndisponivel = "#FBE192";
const borderIndisponivel = "#F7C52B";




function Assentos({ id, name, isAvailable, setCadeirasSelecionadas, cadeirasSelecionadas }) {
    const [selecionar, setSelecionar] = useState(false);
    /*  console.log(AssentosModel) */
    function selecionaCadeira(id) {
        if (!selecionar) {
            setCadeirasSelecionadas([...cadeirasSelecionadas, id])
        } else {

            setCadeirasSelecionadas(cadeirasSelecionadas.filter((index) => index !== id))
        }

    }

    if (isAvailable === true) {
        return (
            <AssentosModel id={id} selecionado={selecionar} color={selecionar ? colorSelecionado : colorDisponivel} border={selecionar ? borderSelecionado : borderDisponivel} onClick={() => {
                selecionaCadeira(id)
                setSelecionar(!selecionar)
            }} >
                <h3>{name}</h3>
            </AssentosModel>

        )
    } else {
        return (
            <AssentosModel color={colorIndisponivel} border={borderIndisponivel} onClick={() => alert("Esse assento não está disponível")}>
                <h3>{name}</h3>
            </AssentosModel>
        )
    }

}


function AssentosSessao({setCpfFinal}) {

    const { idSessao } = useParams()
    console.log(idSessao)

    const [cadeiras, setCadeiras] = useState([]);
    const [cadeirasSelecionadas, setCadeirasSelecionadas] = useState([]);


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        promise.then(response => {
            const { data } = response
            setCadeiras(data)

        })

    }, []);
    const { day, movie, seats, name } = cadeiras
    const filmes = { ...movie }
    const { title, posterURL } = filmes
    const dia = { ...day }
    const { weekday } = dia

    console.log(seats)
    console.log(cadeirasSelecionadas)

    function montarAssentos() {


        if (cadeiras.length === 0) {
            return (
                <h4>Carregando...</h4>
            )
        } else {
            return (
                seats.map((item) =>
                    <Assentos key={item.id} id={item.id} name={item.name} isAvailable={item.isAvailable} selecionado={item.selecionado = false} cadeirasSelecionadas={cadeirasSelecionadas} setCadeirasSelecionadas={setCadeirasSelecionadas} />)
            )
        }

    }


    return (
        <>
            <TelaComFooter>
                <PageTitle>Selecione o(s) assento(s)</PageTitle>
                <ListaAssentos>
                    <AssentosWrap>
                        {montarAssentos()}
                    </AssentosWrap>
                    <LegendaAseentos>
                        <li>
                            <Legenda color={colorSelecionado} border={borderSelecionado}></Legenda>
                            <h3>Selecionado</h3>
                        </li>
                        <li>
                            <Legenda color={colorDisponivel} border={borderDisponivel}></Legenda>
                            <h3>Disponível</h3>
                        </li>
                        <li>
                            <Legenda color={colorIndisponivel} border={borderIndisponivel}></Legenda>
                            <h3>Indisponível</h3>
                        </li>
                    </LegendaAseentos>
                    <ReservarAssento cadeirasSelecionadas={cadeirasSelecionadas} setCpfFinal={setCpfFinal}/>

                </ListaAssentos>
            </TelaComFooter>
            <Rodape pag="assentos" title={title} img={posterURL} weekday={weekday} date={name} />
        </>
    )
}

export default AssentosSessao;


const ListaAssentos = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;

`;

const AssentosWrap = styled.ul`
width: 100%;
height: 205px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 0 24px;

`;

const AssentosModel = styled.li`
width: 25px;
height: 25px;
background-color: ${props => props.color};
border: 1px solid ${props => props.border};
border-radius: 17px;
margin-bottom: 2px;
margin-right: 9px;
display: flex;
align-items: center;
justify-content: center;
font-size: 11px;
line-height: 13px;
letter-spacing: 0.04em;
color: #000000;

`;


const LegendaAseentos = styled.ul`
width: 100%;
height: 116px;
display: flex;
justify-content: space-around;
align-items: center;
li{
    display: flex;
    flex-direction: column;
    align-items: center;

}

li h3 {
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.013em;
    color: #4E5A65;
}

`;

const Legenda = styled.div`
width: 25px;
height: 25px;
background-color: ${props => props.color};
border: 1px solid ${props => props.border};
border-radius: 17px;
margin-bottom: 2px;

`;