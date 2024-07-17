import '../style/style.scss'
import React from 'react'
import { useLocation } from 'react-router-dom'


function Banner({ imageSrc, altText, text }) {
    const location = useLocation()

    let bannerImgClass = 'banner-img'
    //Condition pour ajuster l'image correctement en fonction de la page
    if (location.pathname === '/a_propos') {
        bannerImgClass = 'banner-img-about'
    } else {
        bannerImgClass = 'banner-img'
    }
    return (
        <div className='banner'>
            <div className='banner-container'>
                <img src={imageSrc} alt={altText} className={bannerImgClass}/>
                {text && <p className='banner-txt'>{text}</p>}
            </div>
        </div>
    )
}

export default Banner