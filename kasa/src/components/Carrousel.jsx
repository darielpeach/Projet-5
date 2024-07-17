import React, { useState } from 'react'
import '../style/style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carrousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex -1
        setCurrentIndex(newIndex)
    }

    const goNext = () => {
        const isLastSlide = currentIndex === images.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div className="carrousel">
            {images.length > 1 && (
                <button className ="carrousel-btn carrousel-btn-left" onClick={goPrevious}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

            )}
            <img src={images[currentIndex]} alt="Logement" className='carrousel-img'/>
            {images.length > 1 && (
                <button className='carrousel-btn carrousel-btn-right' onClick={goNext}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            )}
            {images.length > 1 && (
                <div className='carrousel-counter'>
                    {currentIndex + 1}/{images.length}
                </div>
            )}
        </div>
    )
}

export default Carrousel