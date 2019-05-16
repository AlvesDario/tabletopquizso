import React, {Component} from 'react';

class Header extends Component{
    
    render() {
    // console.log("header ",this.props.p);
    return (
    <header>
        <h1>Inicio</h1>
        <p>Vez do player: {this.props.p.id}</p>
    </header>
    );}
}
export default Header;