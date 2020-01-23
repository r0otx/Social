import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from "./components/NavBar/Nav";
import Content from "./components/Content/Content";

const App = () =>  {
    return (
        <div className='gridContainer'>
            <Header/>
            <Nav/>
            <Content />
        </div>
    );
}

export default App;
