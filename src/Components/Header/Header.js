import React from "react";
import "./Header.css";
import logoheader from"../Assets/logo-corebiz-global.svg"

function Header() {
    return (
        <header>
            <div className="header">
                <div className="logo-header">
                    <a href="#"><img src={logoheader}></img></a>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <a href="#">a corebiz</a>   
                        </li>
                        <li>
                            <a href="#">serviços</a>  
                        </li>
                        <li>
                            <a href="#">cases</a>  
                        </li>
                        <li>
                            <a href="#">contato</a>  
                        </li>      
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
