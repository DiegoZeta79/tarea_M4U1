import React from "react";

import '../styles/pages/Contacto.css';

const Contacto = (props) => {
    return (

        <main className="holder">
            <div>
                <h2>Contacto Rápido</h2>
                <form className="formulario" action="" method="">
                    <p>
                        <label htmlFor='nombre'>Nombre</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label htmlFor='email'>Email</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label htmlFor='telefono'>Teléfono</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label htmlFor='mensaje'>Mensaje</label>
                        <textarea></textarea>
                    </p>
                    <p className="acciones">
                        <input type="submit" value='Enviar' />
                    </p>
                </form>

            </div>
            <div className="datos">
                <h2>Otras vías de comunicación</h2>
                <p>También puede comunicarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Teléfono: 123454321</li>
                    <li>Email: xxxxx</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Skype</li>
                </ul>
            </div>

        </main >

    );

}

export default Contacto;