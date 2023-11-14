import React from "react";
/*import './AngelesArcangeles.css';*/

export default class AngelesArcangeles extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row my-4">
                <div className="col-12 d-flex align-item-center">
                    <a href={this.props.href} className="band-thumb">
                        <img src={this.props.img} alt={this.props.nombre} className="band-thumb" />
                    </a>
                    <div className="px-3">
                        <h2>{this.props.nombre}</h2>
                        <p>{this.props.mision}</p>
                    </div>
                </div>
            </div>
        )
    }
}