import React from "react";
import ListaArtistas from "../Componente/ListaArtistas";

export default class ArtistaPagina extends React.Component{

    artista =[
        {
            nombre: 'the who',
            img: '/imagen/lacienciadelosnumeros.jpg',
            descripcion: 'prueba del año numerologico'
        },
        {
            nombre: 'Dire Straits',
            img: '/imagen/lacienciadelosnumeros.jpg'
        },
        {
            nombre: 'Jack Johnson',
            img: '/imagen/lacienciadelosnumeros.jpg'
        }
    ]
render(){
    return(
        <>
            <h2> Artistas </h2>
            <ListaArtistas artista={this.artista} />
        </>
            
       )
   }
}