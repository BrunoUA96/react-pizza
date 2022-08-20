import React from "react";
import './scss/app.scss';
import PizzaCard from "./components/PizzaCard";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";

// Pizzas list
import PizzasList from './assets/pizzas.json';

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
                        {PizzasList.map((pizza, index) => (
                            <PizzaCard {...pizza}
                                       key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
