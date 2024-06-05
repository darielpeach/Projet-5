import logo from '../assets/LOGO.png'
import { Link } from 'react-router-dom'
import '../style/style.scss'

function Header() {
    return (
        <div className='header'>
            <img src={logo} alt='Logo Kasa' />
            <nav>
                <Link to="/" className='nav-link-header nav-link-header-selected'>Accueil</Link>
                <Link to="/a_propos" className='nav-link-header'>À propos</Link>
            </nav>
        </div>
    )
}

export default Header