import React from 'react'
import error from '../assets/404.png'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div>
            <Header />
            <div className='page-error-container'>
                <img src={error} alt="error 404" className='margin-error-element'/>
                <h2 className='margin-error-element error-title'>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/" className='margin-error-element'>Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Error