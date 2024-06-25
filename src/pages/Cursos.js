import React from "react";

import '../styles/pages/Cursos.css';

const Cursos = (props) => {
    return (

        <main className="holder">
            <div className="cursos">
                <div className="curso">
                    <ul>

                        <li><a href="inicial.html">Nivel Inicial</a></li>
                        <li><a href="medio.html">Nivel Medio</a></li>
                        <li><a href="avanzado.html">Nivel Avanzado</a></li>

                    </ul>
                </div>
                <div>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minima autem repellendus officia
                        sunt id. Soluta, dignissimos consequatur blanditiis qui ea autem nobis similique rem eius deserunt
                        ipsum illo molestiae!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio cum rem porro nihil vel corporis
                        neque consectetur eius qui, officia expedita, at repudiandae earum accusantium eaque adipisci. Ea,
                        suscipit veritatis.</h6>
                </div>
            </div>

        </main>

    );

}

export default Cursos;