import React from 'react'
import './Heading.scss'
import classNames from 'classnames'
export default function Heading({leftText, rightText, useColorBlack}) {
    return (
        <div className={classNames(["main-question", useColorBlack && "main-question_black"])}>
             <h1>
            {leftText}
            <span className="main-head"> &nbsp;
              {rightText}
            </span>
          </h1>
        </div>
    )
}
