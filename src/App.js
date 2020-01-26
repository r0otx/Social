import React from 'react';
import './App.css';
import Nav from "./components/NavBar/Nav";
import Content from "./components/Content/Content";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () =>  {
    return (
        <div className='gridContainer'>
            <HeaderContainer/>
            <Nav/>
            <Content />
        </div>
    );
}

export default App;
