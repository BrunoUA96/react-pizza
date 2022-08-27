import React, {useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaCard/SkeletonCard";
import PizzaCard from "../components/PizzaCard";

function Home() {
    // useState to select Active category
    const [activeCategory, setActiveCategory] = useState(0);

    // useState to select Active Sort
    const [activeSortItem, setActiveSortItem] = useState(
        {nameValue: 'popular', sortBy: 'rating'}
    );

    // If loading true use Skeleton card
    const [isLoading, setIsLoading] = useState(true)
    const [pizzaItems, setPizzaItems] = useState(isLoading ? [...new Array(6)] : []);

    useEffect(() => {
        // Turn on Skeleton
        setIsLoading(true);
        fetch(
            'https://630293a7c6dda4f287bbb622.mockapi.io/items?'
            + (activeCategory !== 0 ? `category=${activeCategory}` : '')
            + (`&sortBy=${activeSortItem.sortBy}`)
            + '&order=desc'
        ).then((res) => {
            return res.json()
        }).then((json) => {
            setPizzaItems(json)
            setIsLoading(false);
        })
    }, [activeCategory, activeSortItem]);


    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={activeCategory} onClickCategory={(i) => setActiveCategory(i)}/>
                <Sort activeSortItem={activeSortItem} onClickSort={(i) => setActiveSortItem(i)}/>
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