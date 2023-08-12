// Ici, nous avons le fichier Home avec tous les composant de la page d'accueil 
import React from 'react'
// Navbar avec le logo et les liens 
import Navbar from "../Layout/Navbar"
import Shaping from '../Layout/Shaping' // mise en forme 100px à droite & gauche

import Banner from '../Components/Banner'
// Banner l'image d'accueil 


import Footer from "../Layout/Footer"
// Footer avec le logo et pieds de page 

import Cards from '../Components/Cards'
import "../Styles/Home.scss"

function Home() {
    return (
        <div role="main">
            <Shaping>
                <Navbar />
                <Banner>
                    <div className="banner banner-commun">
                        <h1>Chez vous, partout et ailleurs</h1>
                    </div>
                </Banner>
                <Cards />
            </Shaping>
            <Footer />
        </div>
    )
}

export default Home