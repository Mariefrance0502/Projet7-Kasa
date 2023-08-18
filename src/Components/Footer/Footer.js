import React from 'react'
import logo from "../../Assets/LogoFooter.webp"
import "../../Styles/Footer.css"

function Footer() {
    return (
        <footer className='footer'>
            <div className='img_footer'><img src={logo} alt='Logo footer'/></div>
            <div className='txt_footer'><p>© 2020 Kasa. All rights reserved</p></div>
        </footer>
    )
}

export default Footer


