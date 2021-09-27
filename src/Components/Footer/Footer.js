import React from "react";
import "./Footer.css";
import logofooter from "../Assets/logo-corebiz-black.svg"
import facebook from "../Assets/FB_icon.svg"
import instagram from "../Assets/instagram_icon.svg"
import linkedin from "../Assets/LINKEDIN_icon.svg"
import github from "../Assets/github1.svg"

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="logo-footer">
                    <a href="https://www.corebiz.ag/pt/" target="_blank" rel="noreferrer"><img src={logofooter} alt="corebiz-footer"></img></a>
                    <p>direitos reservados, corebiz 2021</p>

                        <div className="social">
                            <a href="https://www.facebook.com/corebiz.ag/" target="_blank" rel="noreferrer"><img src={facebook} alt="social-icon"></img></a>
                            <a href="https://www.instagram.com/corebizag/" target="_blank" rel="noreferrer"><img src={instagram} alt="social-icon"></img></a>
                            <a href="https://www.linkedin.com/in/camilakeikomaeda/" target="_blank" rel="noreferrer"><img src={linkedin} alt="social-icon"></img></a>
                            <a href="https://github.com/cahkei" target="_blank" rel="noreferrer"><img src={github} alt="social-icon"></img></a>
                        </div>
                </div>
                    <div className="footer-menu">
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
                    <div className="countries">
                            <div className="country">
                            <h3>.Brasil<br></br></h3>
                                <p>
                                Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP<br></br>

                                R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP
                                
                                </p>
                            </div>
                            <div className="country">
                                <h3>.Argentina<br></br></h3>
                                <p>
                                Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA
                                </p>
                            </div>
                            <div className="country">
                                <h3>.México<br></br></h3>
                                <p>
                                Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX
                                </p>
                                </div>
                            <div className="country">
                                <h3>.Chile<br></br></h3>
                                <p>
                                Roberto del Río 1137, Providencia.
                                </p>
                                </div>

                    </div>
            </div>
        </footer>
    )
}
export default Footer