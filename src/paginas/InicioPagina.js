import React from "react";
import Artista from '../Componente/Artista'

export default class InicioPagina extends React.Component{

render(){
    return(
        <>
             <h2>Inicio</h2>
     <p> Bienvenido a mi pagina de artistas favoritos :D aqui almacenare</p>

  <Artista nombre="Dire Straits" 
  img="/imagen/lacienciadelosnumeros.jpg"
  descripcion="Dire Straits" /> 

  <Artista nombre="The Who" 
  img="/imagen/lacienciadelosnumeros.jpg"
  descripcion="Dire Straits"/>
  
  <Artista nombre="Jack Johnson"
  img="/imagen/lacienciadelosnumeros.jpg"
  descripcion="Dire Straits" />

        </>
            
       )
   }
}