import '../style/style.scss'
import logo from '../assets/LOGO-WHITE.png'

function Footer() {
    return (
        <footer className='footer'>
            <div >
                <img  className='footer-items' src={logo} alt='Logo Kasa' />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer