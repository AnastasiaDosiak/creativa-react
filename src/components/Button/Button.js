import React from 'react'
import classNames from 'classnames'
import './Button.scss'
export default function Button({ onClick, text, useColorBlack }) {
    return (
        <button onClick={onClick} className={classNames(["main-button", useColorBlack && "main-button_black"])}>
            {text}
      </button>
    )
}

