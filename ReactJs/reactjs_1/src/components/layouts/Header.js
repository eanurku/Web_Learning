
import React  from 'react';
import {Link}  from 'react-router-dom';

function Header(){

    return (
        <div style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link>|
            <Link style={linkStyle} to="/about">About</Link>
        </div>
    );

}
let headerStyle={
    textAlign :'center',
    backgroundColor:'#111',
    color:'#fff',
    padding:'20px 20px'


}
let linkStyle={
    color:'#fff',
    textDecoration:'none'
}
export default Header;