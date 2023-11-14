import React from "react";
import Artista from "./Artista";
export default class ListaArtistas extends React.Component {

    render(){
        return(
            <>
            {this.props.artista.map((artista)=> (
                <Artista nombre={artista.nombre} img={artista.img} descripcion={artista.descripcion} />
            ))}
            </>
        );
    }

}