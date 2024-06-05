import '../style/style.scss'
import banner from '../assets/Mask Group.png'

function Banner() {
    return (
        <div>
            <img src={banner} alt='bannière paysage' className='banner'/>
            <p className='banner-txt'>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner