import React from 'react';

import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div class="holder">
                <ul>
                    <li><Link to='/' class="activo">Home</Link></li>
                    <li><Link to='/nosotros'>Nosotros</Link></li>
                    <li><Link to='/leyendas'>Leyendas</Link></li>
                    <li><Link to='/laGuitarra'>La Guitarra</Link></li>
                    <li><Link to='/cursos'>Cursos</Link></li>
                    <li><Link to='/contacto'>Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );

}

export default Nav;
