import { useParams } from "react-router-dom"
import {sessions} from "./Listagens"

console.log(sessions)
function SessoesFilme() {
    const { idFilme } = useParams()
    console.log(idFilme)

    return (
        <h1>Página de sessoes de filmes</h1>
    )
}

export default SessoesFilme;