import React, { useState } from 'react'
import '../style/style.scss'

const Dropdown = ({ title, content }) => {
    const [isOpen, setisOpen] = useState(false)

    const toggleDropdown = () => {
        setisOpen(!isOpen)
    }

    return (
        <div className='dropdown'>
            <button onClick={toggleDropdown} className='dropdown-toggle'>
                {title}
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