import React from 'react'
import '../style/style.scss'

const Rating = ({ rating }) => {
    const maxRating = 5
    const stars = []

    for (let i = 1; i <= maxRating; i++) {
        stars.push(
            <span key={i} className={`star ${i <= rating ? 'kasa-star' : 'grey-star'}`}>
                ★
            </span>
        )
    }

    return <div className='rating'>{stars}</div>
}

export default Rating