import React, {useCallback, useState} from 'react';
import Classes from './SearchPizzas.module.scss';
import debounce from "lodash.debounce";
import {SearchContext} from "../../App";

// Icons
import SearchIcon from '../../assets/img/search_icon.svg';
import ClearIcon from '../../assets/img/clear_icon.svg';


function Index() {
    // Use Search Context
    const [inputValue, setInputValue] = useState('')
    const {setSearchValue} = React.useContext(SearchContext);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onSearch = useCallback(
        debounce((value) => {
            setSearchValue(value);
        }, 1000),
        [],
    );

    const onChangeInputValue = (value) => {
        setInputValue(value);
        onSearch(value);
    }

    const inputRef = React.useRef();
    const onClearFocus = () => {
        setInputValue('');
        setSearchValue('');
        inputRef.current.focus();
    }

    return (
        <div className={Classes.search_box}>
            <img className={`${Classes.icon} ${Classes.search}`}
                 src={SearchIcon}
                 alt="Search"/>
            <input ref={inputRef} className={Classes.input}
                   value={inputValue}
                   onChange={(event) => onChangeInputValue(event.target.value)}
                   placeholder='Search'
                   type="text"
            />
            {/*If search Value*/}
            {inputValue && <img className={`${Classes.icon} ${Classes.clear}`}
                                src={ClearIcon}
                                onClick={onClearFocus}
                                alt="Clear input"/>
            }
        </div>
    );
}

export default Index;