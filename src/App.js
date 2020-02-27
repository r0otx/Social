import React from "react";
import "./App.css";
import Content from "./components/Content/Content";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavContainer from "./components/NavBar/NavContainer";

const App = () =>  {
    return (
        <div className="gridContainer">
            <HeaderContainer/>
            <NavContainer/>
            <Content />
        </div>
    );
}

export default App;
