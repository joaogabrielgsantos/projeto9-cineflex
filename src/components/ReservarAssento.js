import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";




function ReservarAssento({cadeirasSelecionadas}) {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [comprador, setComprador] = useState("")
    const navigate = useNavigate();

    function fazerReserva(event) {
        

        event.preventDefault(); // impede o redirecionamento
        navigate('/sucesso');

        const promise = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
            {
                ids: cadeirasSelecionadas,
                name: name,
                cpf: cpf
            });

        promise.then(response => {
            setComprador(response)
            console.log(response)
            console.log(cadeirasSelecionadas)


        })



    }


    return (
        <FormAssento onSubmit={fazerReserva}>
            <label htmlFor="name">Nome do comprador:</label>
            <input required placeholder="Digite seu nome..." type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
            <label htmlFor="cpf">CPF do comprador:</label>
            <input required placeholder="Digite seu CPF..." type="text" id="cpf" value={cpf} onChange={e => setCpf(e.target.value)} />
            <Button type="submit">Reservar assento(s)</Button>

        </FormAssento>
    );
}


export default ReservarAssento;



const FormAssento = styled.form`
display: flex;
align-items: center;
flex-direction: column;
label{
    width: 327px;
    height: 25px;
    margin-top: 10px;
    font-size: 18px;
    line-height: 21px;
    color: #293845;
}
label & placeholder {
        
}

input{
    width: 327px;
    height: 51px;
    &::placeholder {
        color: #AFAFAF;;
        font-size: 18px;
        line-height: 21px;
   }
}



`;

export const Button = styled.button`
width: 225px;
height: 42px;
background-color: #E8833A;
border-radius: 3px;
border: 1px solid #E8833A;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: 0.04em;
color: #FFFFFF;
margin-top: 50px;
margin-bottom: 30px;

`;
