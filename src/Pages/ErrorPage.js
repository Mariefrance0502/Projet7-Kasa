import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import Main from '../Components/Main/Main'
import "../Styles/ErrorPage.css"

function ErrorPage() {
    return (
        <Main>
                <Navbar />
                <div className='error commun-error'>
                    <span>404</span>
                    <h4>Oups! La page que vous demandez n'existe pas.</h4>
                    <p><Link to="/">Retourner sur la page d’accueil</Link></p>
                </div>
          </Main>

    )
}

export default ErrorPage