import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.scss'
import logoImg from './imgs/logo.png'

export default function Menu() {
    return (
        <nav className="menu">
            <div className="main-logo">
                <img src={logoImg} alt="logo" />
            </div>
            <ul className="main-menu">
                <li>
                    <NavLink to="/main" className="menu-link" activeClassName="menu-link_active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="menu-link " activeClassName="menu-link_active">About us</NavLink>
                </li>
                <li>
                    <NavLink to="/blog" className="menu-link " activeClassName="menu-link_active">Portfolio</NavLink>
                </li>
                <li><NavLink to="/services" className="menu-link " activeClassName="menu-link_active">Products</NavLink></li>
                <li><NavLink to="/products" className="menu-link " activeClassName="menu-link_active">Clients</NavLink></li>
                <li>
                    <NavLink to="/plans" className="menu-link" activeClassName="menu-link_active">Team</NavLink>
                </li>
                <li><NavLink to="/portfolio" className="menu-link" activeClassName="menu-link_active">Services</NavLink></li>
                <li><NavLink to="/contacts" className="menu-link" activeClassName="menu-link_active">Plans</NavLink></li>
                <li><NavLink to="/clients" className="menu-link" activeClassName="menu-link_active">Blog</NavLink></li>
                <li><NavLink to="/team" className="menu-link" activeClassName="menu-link_active">Contacts</NavLink></li>
            </ul>
        </nav>
    )
}
