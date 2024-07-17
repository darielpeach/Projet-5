import React, { useState } from 'react'
import '../style/style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

const Dropdown = ({ title, content }) => {
    const [isOpen, setisOpen] = useState(false)

    const toggleDropdown = () => {
        setisOpen(!isOpen)
    }

    return (
        <div className='dropdown'>
            <div className='dropdown-title'>{title}</div>
            <button onClick={toggleDropdown} className='dropdown-toggle'>
                <FontAwesomeIcon icon={faAngleUp}
                className={`dropdown-icon ${isOpen ? 'open' : ''}`} />
            </button>
            {isOpen && (
                <div className='dropdown-content'>
                    {Array.isArray(content) ? (
                        <ul>
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
            )}
        </div>
    )
}

export default Dropdown