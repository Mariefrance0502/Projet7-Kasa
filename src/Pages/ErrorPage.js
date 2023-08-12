
// Faire recherche sur Fragment directement sur la page de react 
import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
// Faire recherche sur LINK  directement sur la page de react 
// Link, qui nous vient de React Router et se comporte comme une balise anchor.Il est donc très important de l’utiliser lorsque vous souhaitez naviguer pour l'accessibilité de votre application (et non utiliser des redirections déclenchées par desonClick
// La balise A permet de définir un lien hypertexte vers un document en spécifiant l'url de ce document au niveau de l'attribut href
import Navbar from "../Layout/Navbar"


import "../Styles/ErrorPage.scss"

function ErrorPage() {
    return (
        <Fragment>    
            <div className='page-error'> 
                <Navbar />
                <div className='error commun-error'>
                    <span>404</span>
                    <h4>Oups! La page que vous demandez n'existe pas.</h4>
                    <p><Link to="/">Retourner sur la page d’accueil</Link></p>
                </div>
            </div>
       </Fragment>
    )
}

export default ErrorPage