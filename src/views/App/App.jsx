import React from "react";
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import './App.css'

const App = () => {
    return (
        <div className="app">
            <Header className="app__header"/>
            <Content className="app__content">
                Основной контент
            </Content>
            <Footer className="app__footer"/> 
        </div>
    );
}

export default App;