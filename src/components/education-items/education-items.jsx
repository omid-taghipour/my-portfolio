import React from 'react'
import './education-items.css'

function EducationItems({ logo, altText, title, desc, time, href }) {
    return (
        <div className='education-item'>
            <img src={logo} alt={altText} />
            <div className='education-item-content'>
                <h3>
                    {title}
                </h3>

                <p>
                    {desc}
                </p>

                <pre>
                    {time}
                </pre>
                <br />
                <a href={href} target='_blank' rel='noreferrer'>
                    Program information
                </a>
            </div>
        </div>
    )
}

export default EducationItems;