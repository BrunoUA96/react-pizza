import React from "react";
import './scss/app.scss';
import PizzaCard from "./components/PizzaCard";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        <PizzaCard title={'hello'} price={0}/>
                        <PizzaCard title={'Pizza'} price={300}/>
                        <PizzaCard title={'Test'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
