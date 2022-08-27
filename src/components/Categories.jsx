import React from "react";

// Categories list
const categoryList = [
    'All',
    'Meat',
    'Vegetarian',
    'Grill',
    'Acute',
    'Closed'
];

function Categories({activeCategory, onClickCategory}) {
    return (
        <div className="categories">
            <ul>
                {
                    categoryList.map((categoryName, index) => (
                        <li className={activeCategory === index ? 'active' : ''}
                            key={index}
                            onClick={() => onClickCategory(index)}>
                            {categoryName}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories;