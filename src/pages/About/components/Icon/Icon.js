import React from 'react'
import iconMain from '../../imgs/icon_.png'
export default function Icon ({ headingText }) {
    return (
        <div>
            <li className="icons-item">
                <img src={iconMain} alt="icon" />
                <span className="about-icons-heading">
                    {headingText}
                </span>
                <p className="icons-text">
                    Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus
                    eget mauris fusce sit amet
        </p>
            </li>
        </div >
    )
}
