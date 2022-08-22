import React, {Component} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaCard/SkeletonCard";
import PizzaCard from "../components/PizzaCard";
import {useEffect, useState} from "react";

function Home() {
    // If loading true use Skeleton card
    const [isLoading, setIsLoading] = useState(true)
    const [pizzaItems, setPizzaItems] = useState(isLoading ? [...new Array(6)] : []);

    useEffect(() => {
        fetch('https://630293a7c6dda4f287bbb622.mockapi.io/items').then((res) => {
            return res.json()
        }).then((json) => {
            setPizzaItems(json)
            setIsLoading(false);
        })
    }, []);


    return (
        <div className="container">
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
                {pizzaItems.map((pizza, index) => (
                    isLoading
                        ? <Skeleton key={index}/>
                        : <PizzaCard {...pizza} key={index}/>
                ))}
            </div>
        </div>
    );
}

export default Home;