import React from 'react';
import Classes from './SearchPizzas.module.scss';

// Icons
import SearchIcon from '../../assets/img/search_icon.svg';
import ClearIcon from '../../assets/img/clear_icon.svg';
import {SearchContext} from "../../App";

function Index() {
    // Use Search Context
    const {searchValue, setSearchValue} = React.useContext(SearchContext);

    return (
        <div className={Classes.search_box}>
            <img className={`${Classes.icon} ${Classes.search}`}
                 src={SearchIcon}
                 alt="Search"/>
            <input className={Classes.input}
                   value={searchValue}
                   onChange={(event) => setSearchValue(event.target.value)}
                   placeholder='Search'
                   type="text"
            />
            {/*If search Value*/}
            {searchValue && <img className={`${Classes.icon} ${Classes.clear}`}
                                 src={ClearIcon}
                                 onClick={() => setSearchValue('')}
                                 alt="Clear input"/>
            }
        </div>
    );
}

export default Index;