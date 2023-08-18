import React from 'react'
import Navbar from "../Components/Navbar/Navbar"
import Main from '../Components/Main/Main'
import Banner from '../Components/Banner/Banner'
import Footer from "../Components/Footer/Footer"
import Cards from '../Components/Cards/Cards'
import "../Styles/Home.css"

function Home() {
    return (
        <div role="main">
            <Main>
                <Navbar />
                <Banner>
                    <div className="banner banner-commun">
                        <h1>Chez vous, partout et ailleurs</h1>
                    </div>
                </Banner>
                <Cards />
            </Main>
            <Footer />
        </div>
    )
}

export default Home