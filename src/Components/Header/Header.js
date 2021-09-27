import React from "react";
import "./Header.css";
import logoheader from"../Assets/logo-corebiz-global.svg"

function Header() {
    return (
        <header>
            <div className="header">
                <div className="logo-header">
                    <a href="https://www.corebiz.ag/pt/"><img src={logoheader}></img></a>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <a href="https://www.corebiz.ag/pt/" target="_blank" rel="noreferrer">a corebiz</a>   
                        </li>
                        <li>
                            <a href="https://www.corebiz.ag/pt/" target="_blank" rel="noreferrer">serviços</a>  
                        </li>
                        <li>
                            <a href="https://www.corebiz.ag/pt/" target="_blank" rel="noreferrer">cases</a>  
                        </li>
                        <li>
                            <a href="https://www.corebiz.ag/pt/" target="_blank" rel="noreferrer">contato</a>  
                        </li>      
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
