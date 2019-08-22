import React from 'react'
import './Description.scss'
export default function Description({text}) {
    return (
        <p className="main-description">
           {text}
        </p>
    )
}
