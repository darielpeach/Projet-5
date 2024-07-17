import React from 'react'
import logo from '../assets/LOGO.png'
import { Link, useLocation } from 'react-router-dom'
import '../style/style.scss'


function Header() {
    const location = useLocation()

    return (
        <div className='header'>
            <img src={logo} alt='Logo Kasa' />
            <nav>
                <Link 
                    to="/" 
                    className={`nav-link-header ${location.pathname === '/' ? 'nav-link-header-selected' : ''}`}
                    >
                        Accueil
                </Link>
                <Link 
                    to="/a_propos" 
                    className={`nav-link-header ${location.pathname === '/a_propos' ? 'nav-link-header-selected' : ''}`}
                    >
                        À propos
                </Link>
            </nav>
        </div>
    )
}

export default Header