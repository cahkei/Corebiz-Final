import axios from "axios";
import "./Content.css";
import imgAPI from "../Assets/imagem4.jpg";
import arrowcircle from "../Assets/arrow-circle.svg";
import React, { useEffect, useState } from "react";

const api = axios.create({
    baseURL: "https://1ba0enqnkk.execute-api.us-east-2.amazonaws.com"
});

export default function Content() {
    
    const [data, setData] = useState([
        { id: " ", text: " ", link: " ", address: Number },
        { id: " ", text: " ", link: " ", address: Number },
        { id: " ", text: " ", link: " ", address: Number },
        { id: " ", text: " ", link: " ", address: Number },
    ]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
      async function getData() {
        const res = await api.get("/data");
  
        setData(res.data.data);
  
        console.log(res.data.data);
      }
  
      getData();
    }, []);
    
    return (
        <div className="contentcontainer">
            <div className="content">
                <p>A Corebiz atua em toda jornada digital do usuário.</p>
                <div>
                    <button className="btn-seemore">veja mais <img src= {arrowcircle}></img></button>
                </div>
            </div>
                <div className="imgAPI">
                    <img src={imgAPI}></img>
                </div>

                
            </div>
    )
}