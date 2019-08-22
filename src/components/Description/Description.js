import React from 'react'
import classNames from 'classnames'
import './Description.scss'

export default function Description({text, useColorGrey}) {
    return (
        <p className="main-description" className={classNames(["main-description", useColorGrey && "main-description_white"])}>
           {text}
        </p>
    )
}