import React, {Component} from 'react';

class Header extends Component{
    
    render() {
    // console.log("header ",this.props.p);
    return (
    <header>
        <h1 style={txtStyle}>Inicio</h1>
        <p style={pStyle}>Vez do player: {this.props.p.id}</p>
    </header>
    );}
}

let txtStyle={
    font: "normal 2em 'Trebuchet MS', Helvetica, sans-serif",
    color: "rgba(255,255,255,1)",
    textShadow: "3px 1px 4px rgba(0,0,0,0.8)"
}

let pStyle = {
    font: "normal 1.2em 'Trebuchet MS', Helvetica, sans-serif",
    color: "rgba(255,255,255,1)",
    textShadow: "3px 1px 4px rgba(0,0,0,0.8)"
}


export default Header;