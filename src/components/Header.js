import React, { Component } from 'react';
import logo from '../assets/images/world.svg';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="center">
                    {/* LOGO */}
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>Discover</strong>Guatemala
                    </span>
                    </div>

                    {/* MENU */}
                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/home" activeClassName="active"> Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/ruta-blog" activeClassName="active"> Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/ruta-form" activeClassName="active"> Formulario</NavLink>
                            </li>
                        </ul>
                    </nav>

                    {/* LIMPIAR FLOTADOS */}
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}

export default Header;