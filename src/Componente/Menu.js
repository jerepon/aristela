import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component{

render(){
    return(
        <div className="row bg-light fixed-top px-4 py-2">
            <div className="col-12 d-flex align- items- center bg-light fixed-top py-2 px-4">
                <h1> Artio actualizado</h1>
                <Link to="/" className="mx-3"> Inicio</Link>
                <Link to="/artista" className="mx-3"> Artista</Link>
                <Link to="/contacto" className="mx-3"> Contacto</Link>
                <Link to="/lanzamientos" className="mx-3"> Lanzamientos</Link>

             </div>
            </div>
            
       )
   }
}