import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";




function Filme({ title, posterURL, idFilme }) {
    return (
        <Link to={`/sessoes/${idFilme}`}>
            <ModelFilm>
                <img src={posterURL} alt={title} />
            </ModelFilm>
        </Link>
    )
}



function PaginaFilmes() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

        promise.then(response => {
            setMovies(response.data)
            console.log("Deu certo!")
        })

    }, [])

    function exibirFilmes() {
        if (movies.length === 0) {
            return (
                <h4>Carregando...</h4>
            )
        } else {
            return (
                movies.map((item, index) =>
                    <Filme key={index} title={item.title} posterURL={item.posterURL} overview={item.overview} idFilme={item.id} />)
            )
        }
    }


    return (
        <TelaInicial>
            <PageTitle>Selecione o filme</PageTitle>
            <ListaFilmes>
                {exibirFilmes()}
            </ListaFilmes>
        </TelaInicial>
    )
}

export default PaginaFilmes;

const TelaInicial = styled.div`
height: 100vh;
padding-top: 67px;

`;

const ListaFilmes = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;

`;

export const PageTitle = styled.h1`
width: 100%;
height: 100px;
font-size: 24px;
line-height: 28px;
color: #293845;
display: flex;
justify-content: center;
align-items: center;
`;

const ModelFilm = styled.div`
width: 145px;
height: 209px;
margin-top: 10px;
background: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
display: flex;
justify-content: center;
align-items: center;
img {
    width: 129px;
    height: 193px;
    object-fit: cover;
}
`;