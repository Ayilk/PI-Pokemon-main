import React from "react";
import { Link } from "react-router-dom";
import '../Estilos/Nav.css'
import logo from "../imagenes/pokeLogo6.jpg";


export default function Nav(){
    return(
        <div className="tira-fija">
                <Link to='/'>
                <img className="logo" src={logo} width="150" height="100"/>
                </Link>
            <h2>
                <Link to='/home'>Home</Link>
            </h2>
            <h2>
                <Link to='/pokemon'>Crear pokemon</Link>
            </h2>
           
        </div>
    )
}