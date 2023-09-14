import { Link } from "react-router-dom"

function Aluno(){
return(
    <div>
        <h1>Ola Alunos</h1>
        <p>ola professor</p>
        <Link to={"/professor"}>Ir para Professor</Link>
    </div>
)

}
export default Aluno