import React, {useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaCard/SkeletonCard";
import PizzaCard from "../components/PizzaCard";
import {SearchContext} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {setActiveCategory, setSort} from '../redux/slices/filterSlice'
import axios from "axios";
import Pagination from "../components/Pagination";

function Home() {
    // State Category & SortBy
    const {activeCategory, activeSortItem} = useSelector((state) => state.filterSlice);
    const dispatch = useDispatch()

    // If loading true use Skeleton card
    const [isLoading, setIsLoading] = useState(true)
    const [pizzaItems, setPizzaItems] = useState(isLoading ? [...new Array(6)] : []);

    // Use Search Context to search Pizzas
    const {searchValue} = React.useContext(SearchContext)

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const limitItemsPerPage = 3;

    useEffect(() => {
        // Turn on Skeleton
        setIsLoading(true);
        console.log(currentPage)
        axios.get(
            'https://630293a7c6dda4f287bbb622.mockapi.io/items?'
            + `page=${currentPage}&limit=${limitItemsPerPage}&`
            + (searchValue ? `title=${searchValue.toLowerCase()}` : '')
            + (activeCategory !== 0 ? `${searchValue ? '&' : ''}category=${activeCategory}` : '')
            + (`&sortBy=${activeSortItem.sortBy}`)
            + '&order=desc'
        ).then(res => {
            setPizzaItems(res.data);
            setIsLoading(false);
        })
    }, [activeCategory, activeSortItem, searchValue, currentPage]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={activeCategory} onClickCategory={(i) => dispatch(setActiveCategory(i))}/>
                <Sort activeSortItem={activeSortItem} onClickSort={(odj) => dispatch(setSort(odj))}/>
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
                {pizzaItems.map((pizza, index) => (
                    isLoading
                        ? <Skeleton key={index}/>
                        : <PizzaCard {...pizza} key={index}/>
                ))}
            </div>

            <Pagination limitItemsPerPage={limitItemsPerPage} currentPage={currentPage} onChangePage={setCurrentPage}/>
        </div>
    );
}

export default Home;