import React from 'react';
import '../Estilos/LandingPage.css';
import linkedIn from '../imagenes/logoLinkedin.png';
import github from '../imagenes/logoGit.png';

export default function LandingPage (){
    return(
        <div className="contenedor-principal">
            <div className='contacto'>
                <h4>Contacto:</h4>
                <a href="https://github.com/Ayilk" >
                    <img src={github} alt="Github" width="60px" heigth="60px"/>
                </a>
                <a href="www.linkedin.com/in/srangelh">
                    <img src={linkedIn} alt="LinkedIn" width="40px" heigth="40px"/>
                </a>
                {/* <a href="https://github.com/Ayilk">
                    <img src={discord} alt="Discord" width="20px" heigth="20px"/>
                </a> */}
                
            </div>   
            <div className='about'>
                <h2 className='p'>Acerca de Pokemon </h2>
                <p className='p'>
                    Pokémon  es una franquicia de medios que originalmente comenzó como un videojuego RPG, 
                    pero debido a su popularidad ha logrado expandirse a otros medios de entretenimiento como 
                    series de televisión, películas, juegos de cartas, ropa, entre otros, convirtiéndose en una 
                    marca que es reconocida en el mercado mundial. 
                </p>
                <p className='p'>
                    La saga de videojuegos es desarrollada por la compañía programadora de software japonesa Game Freak, 
                    con personajes creados por Satoshi Tajiri para la empresa de juguetes Creatures Inc., y a su vez 
                    distribuida por Nintendo. La misión en estos juegos es capturar y entrenar a los pokémon 
                    (criaturas cuya denominación da nombre al juego), que hasta la fecha alcanzan el número de 890.
                </p>
            </div> 
        </div>
    )
}