import React from "react";
import {Route, Routes} from "react-router-dom";

import './scss/app.scss';

import Header from "./components/Header";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";

// Context do search pizzas
export const SearchContext = React.createContext();

function App() {
    // State to Search Pizzas
    const [searchValue, setSearchValue] = React.useState('');
    
    return (
        <div className="wrapper">
            <SearchContext.Provider value={{searchValue, setSearchValue}}>
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path="" element={<Home searchValue={searchValue}/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="*" element={<PageNotFound/>}/>
                    </Routes>
                </div>
            </SearchContext.Provider>
        </div>
    );
}

export default App;
