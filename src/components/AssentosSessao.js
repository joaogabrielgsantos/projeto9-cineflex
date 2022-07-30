import { useParams } from "react-router-dom"

function AssentosSessao (){
    const { idSessao } = useParams()
    console.log(idSessao)

    return (
        <h1>Página de assentos da sessão</h1>
    )
}

export default AssentosSessao;