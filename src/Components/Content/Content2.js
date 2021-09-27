import React from "react";
import "./Content.css";
import arrowcircle from "../Assets/arrow-circle.svg";
import Thumbnails from "../Thumbnails/Thumbnails";

const Content2 = () => {
    return (
    <section className="Content">
        <div className="grid1">
            <div className="title-Content">
                <p id="title">
                    
                </p>
            </div>

            <div className="button-Content">
                <a href="https://www.corebiz.ag/pt/" target="_blank" rel="noreferrer">
                <button className="btn-seemore">veja mais 
                <img className="img-arrow" src={arrowcircle} alt="arrow"/>
                </button></a>
            </div>

            <div className="photos">
                <Thumbnails/>
            </div>

        </div>
        <div className="grid2">
            <div>
                <img id="pictures" alt="corebizteam"/>
            </div>
        </div>
    </section>
    );
}


export default Content2;