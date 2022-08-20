import React, {useState} from "react";

// Categories list
const categoryList = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
];

function Categories() {
    // useState to add active class on clicked category
    const [activeCategory, setActiveCategory] = useState(0);

    return (
        <div className="categories">
            <ul>
                {
                    categoryList.map((categoryName, index) => (
                        <li className={activeCategory === index ? 'active' : ''}
                            key={index}
                            onClick={() => setActiveCategory(index)}>
                            {categoryName}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories;