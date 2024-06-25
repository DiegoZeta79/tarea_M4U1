import React from "react";

const Header = (props) => {
    return (
        <header>
            <div class="holder">
                <img src="images/logo_1.png" id="logo" alt="Guitar Z"/>
            </div>
            <h1>
                Todo sobre la guitarra en un sitio
            </h1>
            <div>
                <img id="guitarra" src="images/guitar_header.png" alt="Guitarra"/>
            </div>
        </header>

    );

}

export default Header;
