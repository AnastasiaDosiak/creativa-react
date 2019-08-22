import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.scss'
import logoImg from './imgs/logo.png'
import { ROUTES } from './utils/config';
export default function Menu() {
    return (
        <nav className="menu">
            <div className="main-logo">
                <img src={logoImg} alt="logo" />
            </div>
            <ul className="main-menu">
        {ROUTES.map(({name,path}, index) => <li key = {index}>
                    <NavLink to={path} className="menu-link" activeClassName="menu-link_active">{name}</NavLink>
                </li>)}
            </ul>
        </nav>
    )
}
