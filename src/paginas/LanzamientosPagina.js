import React from "react";

export default class LanzamientosPagina extends React.Component{
constructor(props) {
    super(props);
    this.state = {
        Lanzamientos: []
    }
}
componentDidMount(){
            fetch("https://www.discogs.com/digs/music/10-of-musics-most-unlikely-collaborations/?utm_source=house&utm_medium=advertising&utm_campaign=Unlikely-Collabs_Music=json")
            .then( res => res.json())
            .then( (result) => {
                console.log(result)
                this.setState({
                    lanzamientos: result.releases
                });
            })


}
render() {
    return(
        <>
        {this.state.Lanzamientos.map((Lanzamiento) => (
            <p>{Lanzamiento.title} ({Lanzamiento.date})</p>
        ))}            
        
        </>
    );
 }
}


